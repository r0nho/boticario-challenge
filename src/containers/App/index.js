import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CreatorsUser } from '../../store/modules/user';
import { Creators as CreatorsAuth } from '../../store/modules/auth';

import App from './App';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => bindActionCreators({ ...CreatorsUser, ...CreatorsAuth }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
