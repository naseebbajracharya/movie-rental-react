import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {

    state = {
        account: {username: '', password: ''}
    }

    username = React.createRef();

    handleSubmit = e => {
        e.preventDefault();

        const username = this.username.current.value;
        //console.log(username);
    };

    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    }
    
    render() { 

        const {account} = this.state;

        return ( 
        <div className="container">
        	<h1 className="text-center">Login</h1>      

            <div class="row">
                <div class="col"></div>

                <div class="col-6">
                <form onSubmit={this.handleSubmit}>
                    
                    <Input name="username" value={account.username} label="Username" onChange={this.handleChange}/>

                    <Input name="password" value={account.password} label="Password" onChange={this.handleChange}/>

                <button class="btn btn-success">Login</button>

                </form>
                </div>
                <div class="col"></div>
            </div>
        </div>);
    }
}
 
export default LoginForm;