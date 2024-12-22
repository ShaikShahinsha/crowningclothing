// import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import {auth, createUserDocumentFromAuth, signInGooglePopup, signInWithGmailEmailAndPassword} from '../../utils/firebase.utils';
import FormInput from "../form-input/form-input.component";

import './sign-in-form.styles.scss';
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
// import { signInWithEmailAndPassword } from "firebase/auth";

// import { UserContext } from "../../contexts/user.context";

const defaultFormFields ={
 
    email: '',
    password: '',
 
};
const SignInForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields);

    const {email,password} = formFields;

    // const {setCurrentUser} = useContext(UserContext);

    const resetFormFields= ()=>{
        setFormFields(defaultFormFields);
    };
    const handleChange = (event)=>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    };

    const signInWithGoogle = async() => {
        const {user} = await signInGooglePopup();
        
        console.log(user);
        const userDocRef =await createUserDocumentFromAuth(user);

    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
    
            //const {email,password} = formFields;
            try {
              const {user} =  await signInWithGmailEmailAndPassword(email,password);
              console.log(user);
            //   setCurrentUser(user);
                resetFormFields();
            } catch (error) {
                console.error('user creation fialed',error);
                switch(error.code){
                    case 'auth/wrong-password':
                            alert("incorrect password for email");
                            break;
                    
                    case 'auth/user-not-found':
                            alert("user doesn't exist");
                            break;
                    default:
                        console.error('user creation fialed',error);
                        break;
                }
              
                }
               
    }

            
    
    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                {/* <lable>Display Name</lable>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                <lable>Email</lable>
                <input type="email" required onChange={handleChange} name="email" value={email}/>
                <lable>Password</lable>
                <input type="password" required onChange={handleChange} name="password" value={password}/>
                <lable>Confirm Password</lable>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <button type="submit">Sign Up</button> */}

                 <FormInput 
                    label="Email"
                    type="email" 
                    required onChange={handleChange} 
                    name="email" 
                    value={email}
                />
                 <FormInput 
                    label="Password"
                    type="password" 
                    required onChange={handleChange} 
                    name="password" 
                    value={password}
                />
                <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>

                </div>
            </form>
        </div>
    )
};

export default SignInForm;