import actions from './types'

const __apiurl = 'http://localhost:3000/api'

export const login = (credentials) => dispatch => {   
    fetch(__apiurl + '/users/login', {
       method: 'POST',
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify(credentials) 
    })
    .then(res => res.json())
    .then(res => {
        if(res.success) {
            dispatch({
                type: actions.LOGIN_SUCCESS,
                token: res.token,
                currentUser: res.currentUser
            })
        } else {
            dispatch({
                type: actions.LOGIN_FAILED,
                errorMessage: res.errorMessage
            })        
        }
    })
    .catch(error => {
        dispatch({
            type: actions.LOGIN_FATALERROR,
            errorMessage: error
        })         
    })
}

export const register = (credentials) => dispatch => {   
    fetch(__apiurl + '/users/register', {
       method: 'POST',
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify(credentials) 
    })
    .then(res => res.json())
    .then(res => {
        if(res.success) {
            dispatch({
                type: actions.REGISTER_SUCCESS,
                token: res.token,
                currentUser: res.currentUser
            })
        } else {
            dispatch({
                type: actions.REGISTER_FAILED,
                errorMessage: res.errorMessage
            })        
        }
    })
    .catch(error => {
        dispatch({
            type: actions.REGISTER_FATALERROR,
            errorMessage: error
        })         
    })
}


export const logout = (userinfo) => dispatch => {

    fetch(__apiurl + '/users/logout', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': 'bearer ' + userinfo.token
        },
        body: JSON.stringify(userinfo)
    })
    .then(res => res.json())
    .then(res => {
        if(res.success) {
            dispatch({
                type: actions.LOGOUT_SUCCESS
            })
        } else {
            dispatch({
                type: actions.LOGOUT_FAILED,
                errorMessage: res.errorMessage
            })        
        }
    })
    .catch(error => {
        dispatch({
            type: actions.LOGOUT_FATALERROR,
            errorMessage: error
        })         
    })

}