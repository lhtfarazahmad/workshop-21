import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email:'',
            password:'',
        
        }       
        this.changeEmail = this.changeEmail.bind(this)              
        this.changePassword = this.changePassword.bind(this)  
        this.onSubmit = this.onSubmit.bind(this)     

    }

    changeEmail(event) {
        this.setState({
            email:event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
    
                            <input type = 'text'
                            placeholder='E-mail'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />
    
                            <input type = 'password'
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />
    
                            <input type='submit' className='btn btn-danger btn block' value='Submit'/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    
}
    
    export default Login;

