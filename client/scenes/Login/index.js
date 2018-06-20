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
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status == 200) { 
                this.props.history.push('/') 
                localStorage.setItem('id', data.id)
            } else {
                alert('wrong')
            }
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