import React from 'react';
import Joi from 'joi-browser';
import Input from './common/input';
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

        const {data, errors} = this.state;

        return ( 
        <div className="container">
        	<h1 className="text-center">Login</h1>      

            <div class="row">
                <div class="col"></div>

                <div class="col-6">
                <form onSubmit={this.handleSubmit}>
                    
                    <Input name="username" value={data.username} label="Username" onChange={this.handleChange} error={errors.username}/>

                    <Input name="password" value={data.password} label="Password" onChange={this.handleChange} error={errors.password}/>

                <button disabled={this.validate()} class="btn btn-success">Login</button>

                </form>
                </div>
                <div class="col"></div>
            </div>
        </div>);
    }
}
 
export default LoginForm;