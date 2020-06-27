import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators } from '../../store/modules/login';

import Home from './Home';

const mapStateToProps = ({ shipments }) => ({ shipments });

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
