import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class LoginForm extends Form {

    state = {
        data: {username: '', password: ''},
        errors: {}
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }
 

    doSubmit = () => {
        //console.log(username);
    }
   
    render() { 

        return ( 
        <div className="container">
        	<h1 className="text-center">Login</h1>      

            <div class="row">
                <div class="col"></div>

                <div class="col-6">
                <form onSubmit={this.handleSubmit}>
                    
                    {this.renderInput('username', 'Username')}

                    {this.renderInput('password', 'Password')}

                    {this.renderButton('Login')}
                </form>
                </div>
                <div class="col"></div>
            </div>
        </div>);
    }
}
 
export default LoginForm;