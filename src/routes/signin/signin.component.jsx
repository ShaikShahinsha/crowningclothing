import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { createUserDocumentFromAuth, signInGooglePopup } from "../../utils/firebase.utils";
import './authentication.styles.scss';
const SignIn = ()=> {

  
    return (
        <div className="authentication-container">
            {/* <h1>SIGN IN </h1> */}
            {/* <button onClick={logGoogleUser}>
                SignInWithGooglePopup
            </button> */}
            <SignInForm/>
            <SignUpForm/>
            
        </div>
    )
};

export default SignIn;

