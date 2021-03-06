import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators, login } from '../../store/modules/auth';

import Login from './Login';

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => bindActionCreators({ Creators, login }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
