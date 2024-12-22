import { ButtonContainer,InvertedButton,GoogleSigninButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES={
    base:'base',
    google:'google-sign-in',
    inverted: 'inverted'
}

export const getButton = (buttonType = BUTTON_TYPE_CLASSES.base)=>{
    return {
        [BUTTON_TYPE_CLASSES.base] : ButtonContainer,
        [BUTTON_TYPE_CLASSES.google]: GoogleSigninButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
    }[buttonType];
}
const Button = ({children,buttonType,...otherProps}) =>{
    const CustomButton = getButton(buttonType);
    
    return(
        <CustomButton  {...otherProps}>
            {children}
        </CustomButton>
    )
}

export default Button;