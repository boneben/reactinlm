import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../store/actions/authActions'

class RegisterForm extends Component {
    
    state = {
        firstname: '',
        lastname: '',
        organization: '',
        addressline: '',
        zipcode: '',
        city: '',
        country: '',
        email: '',
        password: ''
    }

    validateForm() {
        return (
        this.state.firstname.length > 0 &&
        this.state.lastname.length > 0 &&
        this.state.addressline.length > 0 &&
        this.state.zipcode.length > 0 &&
        this.state.city.length > 0 &&
        this.state.country.length > 0 &&
        this.state.email.length > 0 &&
        this.state.password.length > 0
        )
    }

    handleChange = e => {
        this.setState( { [e.target.id] : e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const credentials = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            organization: this.state.oranization,
            addressline: this.state.addressline,
            zipcode: this.state.zipcode,
            city: this.state.city,
            country: this.state.country,
            email: this.state.email,
            password: this.state.password
        }

        this.props.register(credentials)
    }

    render() {

        const { firstname, lastname, organization, addressline, 
        zipcode, city, country, email, password } = this.state;
        const { token, currentUser, statusMessage, errorMessage } = this.props;

        if(token && currentUser) return <Redirect to='/profile' />
        if(errorMessage) { console.log("ErrorMessage: " + errorMessage) }

        return(
            <div className="my-5">
                <form onSubmit={ this.handleSubmit } noValidate>
                    <div className="form-group">
                        <label htmlFor="firstname">Förnamn: </label>
                        <input type="text" className="form-control" id="firstname" value={firstname} onChange={this.handleChange} />
                        <label htmlFor="lastname">Efternamn: </label>
                        <input type="text" className="form-control" id="lastname" value={lastname} onChange={this.handleChange} />
                        
                        <label htmlFor="organization">Företag/Organisation: </label>
                        <input type="text" className="form-control" id="organization" value={organization} onChange={this.handleChange} />
                        <small id="organizationHelp" className="form-text text-muted">(Valfritt)</small>
                    </div>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="addressline">Adress: </label>
                        <input type="text" className="form-control" id="addressline" value={addressline} onChange={this.handleChange} />
                        <label htmlFor="zipcode">Postnummer: </label>
                        <input type="text" className="form-control" id="zipcode" value={zipcode} onChange={this.handleChange} />
                        <label htmlFor="city">Stad: </label>
                        <input type="text" className="form-control" id="city" value={city} onChange={this.handleChange} />
                        <label htmlFor="country">Land: </label>
                        <input type="text" className="form-control" id="country" value={country} onChange={this.handleChange} />
                    </div>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="email">E-postadress: </label>
                        <input type="email" className="form-control" id="email" value={email} onChange={this.handleChange}  />
                        <label htmlFor="password">Lösenord: </label>
                        <input type="password" className="form-control" id="password" value={password} onChange={this.handleChange}  />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!this.validateForm()}>Registrera</button>
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
        register: (credentials) => dispatch(register(credentials))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm)