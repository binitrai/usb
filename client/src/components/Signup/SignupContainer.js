import { connect } from 'react-redux';
import { SignupComponent } from '.';


const mapStateToProps = (state) => {
  const { loginName } = state.login;
  return { loginName };
};

const mapDispatchToProps = (state) => {

};

export const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupComponent);
