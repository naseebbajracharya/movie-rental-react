import React, { Component } from 'react';

class LoginForm extends Component {

    state = {
        account: {username: '', password: ''}
    }

    username = React.createRef();

    handleSubmit = e => {
        e.preventDefault();

        const username = this.username.current.value;
        console.log(username);
    };

    handleChange = e => {
        const account = {...this.state.account};
        account.username = e.currentTarget.value;
        this.setState({account});
    }
    
    render() { 
        return ( 
        <div className="container">
        	<h1 className="text-center">Login</h1>      

            <div class="row">
                <div class="col"></div>

                <div class="col-6">
                <form onSubmit={this.handleSubmit}>
                    
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input value={this.state.account.username} onChange={this.handleChange} autoFocus id="username" type="text" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" className="form-control"/>
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