import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
    
    state = {
        currentUser: {}
    }

    render() {
        const { token, currentUser } = this.props

        

        return(
            <div className="my-5">
               { currentUser.firstName }
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
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)