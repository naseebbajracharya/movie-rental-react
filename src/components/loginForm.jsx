import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './common/input';

class LoginForm extends Component {

    state = {
        account: {username: '', password: ''},
        errors: {}
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    validate = () => {
        const options = {abortEarly: false};
        const {error} = Joi.validate(this.state.account, this.schema, options);
        if (!error)
        return null;

        const errors = {};
        for (let item of error.details) 
            errors[item.path[0]] = item.message;
        return errors;
    }

    username = React.createRef();

    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        //console.log(errors);
        this.setState({errors: errors || {}});
        if (errors) return;

        //const username = this.username.current.value;
        //console.log(username);
    };

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account, errors});
    }
    
    render() { 

        const {account, errors} = this.state;

        return ( 
        <div className="container">
        	<h1 className="text-center">Login</h1>      

            <div class="row">
                <div class="col"></div>

                <div class="col-6">
                <form onSubmit={this.handleSubmit}>
                    
                    <Input name="username" value={account.username} label="Username" onChange={this.handleChange} error={errors.username}/>

                    <Input name="password" value={account.password} label="Password" onChange={this.handleChange} error={errors.password}/>

                <button disabled={this.validate()} class="btn btn-success">Login</button>

                </form>
                </div>
                <div class="col"></div>
            </div>
        </div>);
    }
}
 
export default LoginForm;