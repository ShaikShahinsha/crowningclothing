import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {auth, createUserDocumentFromAuth} from '../../utils/firebase.utils';
import FormInput from "../form-input/form-input.component";

import './sign-up-form.styles.scss';
import Button from "../button/button.component";

const defaultFormFields ={
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};
const SignUpForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields);

    const {displayName,email,password,confirmPassword} = formFields;

    const resetFormFields= ()=>{
        setFormFields(defaultFormFields);
    };
    const handleChange = (event)=>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert("incceorect password");
            return;
        }

            //const {email,password} = formFields;
            try {
                const {user} = await createUserWithEmailAndPassword(auth,email,password);
                console.log({user});
                await createUserDocumentFromAuth(user,{displayName});
                resetFormFields();
            } catch (error) {
                if(error.code === 'auth/email-already-in-use'){
                    alert("email already existed/used");
                }
                console.error('user creation fialed',error);
            }
            
    }
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
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
                    label="DisplayName"
                    type="text" 
                    required onChange={handleChange} 
                    name="displayName" 
                    value={displayName}
                />
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
                 <FormInput 
                    label="ConfirmPassword"
                    type="password" 
                    required onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword}
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
};

export default SignUpForm;