import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../store/actions/authActions'
import lang from '../../languages/en-us'

class LoginForm extends Component {
    
    state = {
        email: '',
        password: ''
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = e => {
        this.setState( { [e.target.id] : e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        let credentials = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.login(credentials)
    }

    render() {

        const { email, password } = this.state
        const { token, currentUser, statusMessage, errorMessage } = this.props

        if(token && currentUser) return <Redirect to='/profile' />
        if(errorMessage) { console.log("ErrorMessage: " + errorMessage) }

        return(
            <div className="my-5">
                <form onSubmit={ this.handleSubmit } noValidate>
                    <div className="form-group">
                        <label htmlFor="email">{ lang.login_email }</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder={lang.login_email_tooltip} value={email} onChange={this.handleChange} />
                        <small id="emailHelp" className="form-text text-muted">{ lang.login_email_info }</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">{ lang.login_password }</label>
                        <input type="password" className="form-control" id="password" placeholder={ lang.login_password_tooltip } value={password} onChange={this.handleChange}  />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!this.validateForm()}>{ lang.login_button }</button>
                </form>
                <div className="my-5"><strong>StatusMessage: </strong> { statusMessage }</div>
            </div>  
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        currentUser: state.auth.currentUser,
        statusMessage: state.auth.statusMessage,
        errorMessage: state.auth.errorMessage      
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) => dispatch(login(credentials))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)