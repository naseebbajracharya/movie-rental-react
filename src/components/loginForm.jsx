import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {

    state = {
        account: {username: '', password: ''},
        errors: {}
    }

    validate = () => {
        const errors = {};

        const {account} = this.state;

        if (account.username.trim() === '')
        errors.username = 'Username is required!';

        if (account.password.trim() === '')
        errors.password = 'Password is required!';

        return Object.keys(errors).length === 0 ? null : errors;
    }

    username = React.createRef();

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
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
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

                <button class="btn btn-success">Login</button>

                </form>
                </div>
                <div class="col"></div>
            </div>
        </div>);
    }
}
 
export default LoginForm;