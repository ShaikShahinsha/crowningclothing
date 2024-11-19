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
        </div>
    )
};

export default SignIn;

