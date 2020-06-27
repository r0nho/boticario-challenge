import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import Chip from '@material-ui/core/Chip';

// Icons
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// Styleds
import { CenteredDiv, AppWrapper, DetailContainer, SpanLabel, DetailSpan } from './styles';

interface State {
  loading: boolean;
  fetching: boolean;
}

class DetailsInformations extends Component<any, State> {
  public state = {
    loading: true,
    fetching: false,
  };

  render() {
    const { loading, fetching } = this.state;
    const { currentShipment } = this.props.shipments;

    return (
      <AppWrapper>
        {loading ? (
          <CenteredDiv>
            <CircularProgress color="inherit" className="blue" />
          </CenteredDiv>
        ) : (
          <DetailContainer>
            <Link to="/">
              {' '}
              <ArrowBackIcon color="inherit" fontSize="large" className="blue" />{' '}
            </Link>
            eae FIII!
          </DetailContainer>
        )}
      </AppWrapper>
    );
  }
}

export default DetailsInformations;
