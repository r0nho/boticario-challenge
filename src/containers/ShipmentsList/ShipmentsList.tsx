import React, { Component } from 'react';
import _ from 'underscore';
import { Shipment } from 'interfaces/shipments/shipment.interface';

// Components
import ShipmentsListItem from 'components/ShipmentsListItem';
import { SearchInput as SearchFilter } from 'components/Inputs';
import { SelectInput as SelectFilter } from 'components/Inputs';
import MenuItem from '@material-ui/core/MenuItem';

// Icons
import CircularProgress from '@material-ui/core/CircularProgress';

// Services & utils
import { getShipments } from 'services/shipments';
import history from 'utils/history';

//Styles
import { AppWrapper, CenteredDiv, TableHeader } from './styles';

// Paginate plugin
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";

interface State {
  loading: boolean,
  currentPage: number,
  filters: {
    id: number | null,
    sort: string | null,
    order: string | null,
  },
}

export class ShipmentsList extends Component<any, State> {

  public state: State = {
    loading: true,
    currentPage: 1,
    filters: {
      id: null,
      sort: 'id',
      order: 'asc',
    },
  };

  componentDidMount() {
    this.getListData();
  }

  getListData(pagenumber?: number, filters?: {}) {
    const { setShipments } = this.props;

    this.setState({ loading: true });

    getShipments(pagenumber, filters)
      .then((shipments: Array<Shipment>) => {
        setShipments(shipments);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  changePage(pagenumber: number) {
    this.setState({ currentPage: pagenumber });
    this.getListData(pagenumber, this.state.filters);
  }

  searchById = _.debounce((id: number) => {
    this.setState({
      filters: {
        ...this.state.filters,
        id,
      },
    }, () => {
      this.getListData(this.state.currentPage, this.state.filters);
    });
  }, 500);

  /**
   * Generic function to sort and order list
   * @param key Key of state object filter
   * @param value Value of the key from state object
   */
  sortAndOrderBy(key: string, value: string) {
    this.setState({
      filters: {
        ...this.state.filters,
        [key]: value,
      }
    }, () => {
      this.getListData(this.state.currentPage, this.state.filters);
    });
  }

  goToDetail(id: string) {
    const { list } = this.props.shipments;
    const shipment = list.find((item: Shipment) => item.id === id);

    this.props.setCurrentShipment(shipment);
    history.push(`/details/${id}`);
  }

  render() {
    const { loading, filters } = this.state;
    const { list } = this.props.shipments;

    return (
      <AppWrapper>
        <TableHeader>
          <h2 className="heading">
            Shipments
          </h2>

          <SelectFilter
            keyToSort='sort'
            onChange={(key: string, value: string) => this.sortAndOrderBy(key, value)}
            value={filters.sort}
          >
            <MenuItem value='id'>ID</MenuItem>
            <MenuItem value='name'>Name</MenuItem>
            <MenuItem value='status'>Status</MenuItem>
          </SelectFilter>

          <SelectFilter
            keyToSort='order'
            onChange={(key: string, value: string) => this.sortAndOrderBy(key, value)}
            value={filters.order}
          >
            <MenuItem value='asc'>ASC</MenuItem>
            <MenuItem value='desc'>DESC</MenuItem>
          </SelectFilter>

          <SearchFilter onSearch={(id: number) => this.searchById(id)} />
        </TableHeader>

        {loading
          ? (
            <CenteredDiv>
              <CircularProgress color="inherit" className="blue" />
            </CenteredDiv>
          )
          : (
            <>
              <div className="list-items">
                { list.length === 0 
                  ? <h4 className="no-results-text" >No results, try another ID...</h4> 
                  : (
                    list.map((shipment: Shipment) => 
                      <ShipmentsListItem key={shipment.id} id={shipment.id} item={shipment} onSelectShipment={(id: string) => this.goToDetail(id)} />
                    )
                  )
                }
              </div>

              {
                !filters.id && (
                  <Pagination
                    currentPage={this.state.currentPage}
                    totalSize={23}
                    sizePerPage={20}
                    theme="border-bottom"
                    changeCurrentPage={(page: number) => { this.changePage(page) }}
                  />
                )
              }
            </>
          )
        }
      </AppWrapper>
    );
  }
}

export default ShipmentsList;
