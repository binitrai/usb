import {connect} from 'react-redux';
import LoginComponent from './LoginComponent';


const mapStateToProps = state => {
    const { loginName } = state.login;
    return { loginName }
}

const mapDispatchToProps = state => {
    
}

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
) (LoginComponent);


export default LoginContainer;