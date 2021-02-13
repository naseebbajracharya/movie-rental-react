import React, { Component } from 'react';

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
                    
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input value={account.username} onChange={this.handleChange} name="username" autoFocus id="username" type="text" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={account.password} onChange={this.handleChange} name="password" id="password" type="password" className="form-control"/>
                    </div>

                <button class="btn btn-success">Login</button>

                </form>
                </div>
                <div class="col"></div>
            </div>
        </div>);
    }
}
 
export default LoginForm;