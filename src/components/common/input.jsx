import { rest } from 'lodash';
import React from 'react';

const Input = ({name, label, error, ...rest}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input {...rest} name={name} id={name} className="form-control"/>
            {error && <div className="alert alert-danger alert-dismissible fade show">
                {error} 
            </div>}
        </div>
     );
}
 
export default Input;