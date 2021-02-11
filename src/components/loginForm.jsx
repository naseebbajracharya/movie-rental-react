import React, { Component } from 'react';

class LoginForm extends Component {

    handleSubmit = e => {
        e.preventDefault();
        console.log('Submitted');
    };
    
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
                        <input id="username" type="text" className="form-control"/>
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