import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginForm from '../forms/loginForm';
import RegisterForm from '../forms/registerForm';
import Profile from './profile'


const Content = (props) => {
    return(
        <main className="container mt-5">
        
            <Switch>
                <Route path='/register' component={ RegisterForm } />
                <Route path='/login' component={ LoginForm } />
                <Route path='/profile' component={ Profile } />
            </Switch>

        </main>
    )
}

export default Content