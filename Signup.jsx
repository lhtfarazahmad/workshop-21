import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            fullName:'',
            email:'',
            mobile:'',
            password:'',
            confirmPassword:''
        }
        this.changeFullName = this.changeFullName.bind(this)        
        this.changeEmail = this.changeEmail.bind(this)        
        this.changeMobile = this.changeMobile.bind(this)        
        this.changePassword = this.changePassword.bind(this)        
        this.changeConfirmPassword = this.changeConfirmPassword.bind(this)   
        this.onSubmit = this.onSubmit.bind(this)     

    }

    changeFullName(event) {
        this.setState({
            fullName:event.target.value
        })
    }
    changeEmail(event) {
        this.setState({
            email:event.target.value
        })
    }
    changeMobile(event) {
        this.setState({
            mobile:event.target.value
        })
    }
    changePassword(event) {
        this.setState({
            password:event.target.value
        })
    }
    changeConfirmPassword(event) {
        this.setState({
            confirmPassword:event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            email: this.state.email,
            mobile: this.state.mobile,
            password:this. state.password,
            confirmPassword: this.state.confirmPassword
        }

        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))

        this.setState({
            fullName:'',
            email:'',
            mobile:'',
            password:'',
            confirmPassword:''
        })
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type = 'text'
                            placeholder='Full Name'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='E-mail'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />

                            <input type = 'Number'
                            placeholder='Mobile No.'
                            onChange={this.changeMobile}
                            value={this.state.mobile}
                            className='form-control form-group'
                            />

                            <input type = 'password'
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />

                            <input type = 'password'
                            placeholder='Confirm Password'
                            onChange={this.changeConfirmPassword}
                            value={this.state.confirmPassword}
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

export default Signup;