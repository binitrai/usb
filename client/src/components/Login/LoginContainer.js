import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLoader } from '../Loading/reducers';

import { LoginComponent } from '.';


const mapStateToProps = (state) => {
  const { loginName } = state.login;
  return { loginName };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateLoader,
}, dispatch);

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);
