import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class RegisterForm extends Form {
    state = { 
        data: {username: '', password: '', name: ''},
        errors: {}
     }

    schema = {
        username: Joi.string().required().email().label('Username'),
        password: Joi.string().required().min(5).label('Password'),
        name: Joi.string().required().label('Full Name')
    }

    doSubmit = () => {
        console.log("Submitted")
    }

    render() { 
        return ( 
            <div className="container">
                <h1 className="text-center">Customer Registration</h1>      
    
                <div class="row">
                    <div class="col"></div>
    
                    <div class="col-6">
                    <form onSubmit={this.handleSubmit}>

                        {this.renderInput('name', 'Full Name')}
                        
                        {this.renderInput('username', 'Email ID')}
    
                        {this.renderInput('password', 'Password', 'password')}
    
                        {this.renderButton('Register')}
                    </form>
                    </div>
                    <div class="col"></div>
                </div>
            </div>);
    }
}
 
export default RegisterForm;