import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators, login, register } from '../../store/modules/auth';

import Login from './Register';

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => bindActionCreators({ Creators, login, register }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
