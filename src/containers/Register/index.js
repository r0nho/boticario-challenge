import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators, register } from '../../store/modules/auth';

import Register from './Register';

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => bindActionCreators({ Creators, register }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);
