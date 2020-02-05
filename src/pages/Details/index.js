import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators } from '../../store/modules/shipments';

import Details from './Details';

const mapStateToProps = ({ shipments, router }) => ({ shipments, router });

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
