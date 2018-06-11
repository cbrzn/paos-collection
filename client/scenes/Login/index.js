import React, { Component } from 'react';
import Login from './login';

class LoginContainer extends Component {

    state = {
        username: '',
        password: '',
        fetching: false,
    }

    handleTextChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    }

    handleLogin = () => {
        this.setState({fetching:true});
        setInterval(() => this.setState({ fetching: false }), 3000)
    }

    render() {
        const { username, password, fetching } = this.state;

        return <Login 
            handleTextChange={this.handleTextChange}
            handleLogin={this.handleLogin}
            username={username}
            password={password}
            fetching={fetching}
        />
    }
}

export default LoginContainer