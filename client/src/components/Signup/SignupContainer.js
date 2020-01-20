import { connect } from 'react-redux';
import SignupComponent from './SignupComponent';


const mapStateToProps = (state) => {
  const { loginName } = state.login;
  return { loginName };
};

const mapDispatchToProps = (state) => {

};

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupComponent);


export default SignupContainer;
