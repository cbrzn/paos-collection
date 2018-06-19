import React, { Component } from 'react';
import Login from './login';

class LoginContainer extends Component {

    state = {
        email: '',
        password: '',
        fetching: false,
    }

    handleTextChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    }

    handleLogin = () => {
        const { email, password } = this.state
        fetch('/login', {
            method: 'post',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
             ((data.status == 200) ? this.props.history.push('/') : alert('Wrong'))
        })
    }

    render() {
        const { email, password, fetching } = this.state;

        return <Login 
            handleTextChange={this.handleTextChange}
            handleLogin={this.handleLogin}
            email={email}
            password={password}
            fetching={fetching}
        />
    }
}

export default LoginContainer