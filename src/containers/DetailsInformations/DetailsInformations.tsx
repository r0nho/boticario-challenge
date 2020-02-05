import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Shipment } from 'interfaces/shipments/shipment.interface';

// Components
import EditableInput from 'containers/EditableInput';
import Chip from '@material-ui/core/Chip';
import ProductList from 'components/ProductList';

// Icons
import CircularProgress from '@material-ui/core/CircularProgress';
import Flight from '@material-ui/icons/Flight';
import DirectionsBoat from '@material-ui/icons/DirectionsBoat';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// Services
import { getShipments, updateShipment } from 'services/shipments';
import { getStatus } from 'utils/helpers';

// Styleds
import { CenteredDiv, AppWrapper, DetailContainer, SpanLabel, DetailSpan } from './styles';

interface State {
  loading: boolean;
  fetching: boolean;
}

const ModeIcon = ({ name }: { name: string}) => {
  switch(name) {
    case 'sea':
      return <Flight color="inherit" className="blue" />
    
    default:
      return <DirectionsBoat color="inherit" className="blue" />
  }
};

class DetailsInformations extends Component<any, State> {
  public state = {
    loading: true,
    fetching: false,
  };
  
  componentDidMount() {
    const { currentShipment } = this.props.shipments;

    // if not redirected, get data from service
    if (!currentShipment?.id) {
      const { id } = this.props.params;

      this.requestShipmentData(id);
    } else {
      this.setState({ loading: false });
    }
  }

  requestShipmentData(id: string) {
    const filter = { id };
    const { setCurrentShipment } = this.props;

    this.setState({ loading: true });

    getShipments(1, filter)
      .then((shipment: Array<Shipment>) => {
        setCurrentShipment(shipment[0]);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  updateShipmentName(newName: string) {
    const payload = { name: newName };
    const { id } = this.props.shipments.currentShipment;

    updateShipment(id, payload)
      .then((response) => {
        this.props.setCurrentShipment(response);
      })
      .finally(() => {
        this.setState({ fetching : false });
      });
  }

  render() {
    const { loading, fetching } = this.state;
    const { currentShipment } = this.props.shipments;

    return (
      <AppWrapper>
        {
          loading
            ? (
              <CenteredDiv>
                <CircularProgress color="inherit" className="blue" />
              </CenteredDiv>
            )
            : (
              <DetailContainer>
               <Link to='/'> <ArrowBackIcon color="inherit" fontSize="large" className='blue' /> </Link>

                <div className="header-detail">
                  <SpanLabel>Name:</SpanLabel> <br/>
                  <EditableInput
                    onEdit={(name: string) => { this.updateShipmentName(name)}} 
                    value={currentShipment.name} 
                    fetching={fetching} 
                    disabled={fetching} 
                  />
                </div>
                <div className="general-information-detail">
                  <div>
                    <SpanLabel>ID:</SpanLabel> <br/>
                    <DetailSpan> {currentShipment.id} </DetailSpan>
                  </div>

                  <div>
                    <SpanLabel>Origin / Destination:</SpanLabel> <br/>
                    <DetailSpan> {currentShipment.origin} - {currentShipment.destination} </DetailSpan>
                  </div>

                  <div>
                    <SpanLabel>Status:</SpanLabel> <br/>
                    <DetailSpan> 
                      <Chip label={getStatus(currentShipment.status)} className={`chip ${getStatus(currentShipment.status)}`} color="primary" /> 
                    </DetailSpan>
                  </div>

                  <div>
                    <SpanLabel>Mode:</SpanLabel> <br/>
                    <DetailSpan> <ModeIcon name={currentShipment.mode} /> </DetailSpan>
                  </div>

                  <div>
                    <SpanLabel>UserID:</SpanLabel> <br/>
                    <DetailSpan> {currentShipment.userId }  </DetailSpan>
                  </div>

                </div>

                <div className="products-detail">
                  <div>
                    <SpanLabel>Products:</SpanLabel> <br/>
                    <div className="products-detail-list">
                      <ProductList items={currentShipment.cargo} />
                    </div>
                  </div>
                </div>
              </DetailContainer>
            )
        }
      </AppWrapper>
    );
  }
}

export default DetailsInformations;
