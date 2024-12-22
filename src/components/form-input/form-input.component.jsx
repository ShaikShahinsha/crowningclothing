import { Fragment } from "react";
import { Group,FormInputLabel,Input } from "./form-input.styles";

const FormInput = ({label, ...otherProps}) => {

    return(
        <Group>
{/* 
            <lable>Display Name</lable>
            <input type="text" required onChange={handleChange} name="displayName" value={displayName}/> */}

            
            <Input {...otherProps}/>
            { 
                label &&(
                    <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
                )
            }
           


        </Group>
    )
}

export default FormInput;