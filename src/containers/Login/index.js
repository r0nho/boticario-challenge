import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators } from '../../store/modules/login';

import Login from './Login';

const mapStateToProps = ({ shipments }) => ({ shipments });

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
