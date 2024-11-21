import { Fragment } from "react";
import './form-input.styles.scss';

const FormInput = ({label, ...otherProps}) => {

    return(
        <div className="group">
{/* 
            <lable>Display Name</lable>
            <input type="text" required onChange={handleChange} name="displayName" value={displayName}/> */}

            
            <input className="form-input" {...otherProps}/>
            { 
                label &&(
                    <label className={`${otherProps.value.length ? 'shrink': ''} form-input-label`}>{label}</label>
                )
            }
           


        </div>
    )
}

export default FormInput;