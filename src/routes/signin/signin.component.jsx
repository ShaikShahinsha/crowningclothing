import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { createUserDocumentFromAuth, signInGooglePopup } from "../../utils/firebase.utils";
const SignIn = ()=> {

    const logGoogleUser = async() => {
        const {user} = await signInGooglePopup();
        console.log(user);
        const userDocRef =await createUserDocumentFromAuth(user);

    }
    return (
        <div>
            <h1>SIGN IN </h1>
            <button onClick={logGoogleUser}>
                SignInWithGooglePopup
            </button>
            <SignUpForm/>
        </div>
    )
};

export default SignIn;

