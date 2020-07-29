import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators } from '../../store/modules/user';
import { getListPurchases } from '../../store/modules/purchases';

import MyPurchases from './MyPurchases';

const mapStateToProps = ({ purchases }) => ({ purchases });

const mapDispatchToProps = dispatch => bindActionCreators({ Creators, getListPurchases }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyPurchases);
