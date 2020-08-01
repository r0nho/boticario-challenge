import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getListPurchases, Creators } from '../../store/modules/purchases';

import MyPurchases from './MyPurchases';

const mapStateToProps = ({ purchases }) => ({ purchases });

const mapDispatchToProps = dispatch => bindActionCreators({ ...Creators, getListPurchases }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyPurchases);
