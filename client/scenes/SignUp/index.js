import React, { Component } from 'react';
import {
    withStyles,
    Grid,
    Paper,
    TextField,
    Typography,
    Divider,
    Button,
} from '@material-ui/core'
import { Link } from 'react-router-dom';
import styles from './styles';

class SignUp extends Component {

    state = {
        name: '',
        password: '',
        password_confirmation: '',
        email: '',
        location: '',
    }

    handleTextChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    }

    handleSignup = () => {
        this.setState({ fetching:true });
        const { email, name, location, password, password_confirmation } = this.state
        if (password === password_confirmation) {
            fetch('/signup', {
                method: 'post',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({ name, email, location, password })
            })
            .then(response => response.json())
            .then(data => {
                this.setState({ fetching: false });
                ((data.status == 200) ? this.props.history.push('/') : alert('Wrong'))                
            })
        } else {
            alert('Password doesnt match');
        }
    }

    render() {
        const { classes } = this.props;
        const { name, password, email, location, password_confirmation } = this.state;

        return (
            <Grid container justify="center">
                <Grid item lg={3} md={4} sm={6} xs={10}>
                    <Paper className={classes.paper}>                            
                        <div className={classes.container}>
                            <Typography variant="title">                                    
                                Sign Up                                    
                            </Typography>                            
                            <form noValidate autoComplete="off">
                                <TextField
                                    id="name"
                                    label="Name"
                                    margin="dense"
                                    value={name}
                                    fullWidth
                                    onChange={this.handleTextChange('name')}
                                />
                                <TextField
                                    id="email"
                                    label="Email"
                                    margin="dense"
                                    value={email}
                                    type="email"
                                    fullWidth
                                    onChange={this.handleTextChange('email')}
                                />
                                <TextField
                                    id="location"
                                    label="Location"
                                    margin="dense"
                                    value={location}
                                    type="location"
                                    fullWidth
                                    onChange={this.handleTextChange('location')}
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    margin="dense"
                                    value={password}
                                    type="password"
                                    fullWidth
                                    onChange={this.handleTextChange('password')}
                                />
                                <TextField
                                    id="password_confirmation"
                                    label="Password Confirmation"
                                    margin="dense"
                                    value={password_confirmation}
                                    type="password"
                                    fullWidth
                                    onChange={this.handleTextChange('password_confirmation')}
                                />
                            </form>
                            <div className={classes.actions}>
                                <Button      
                                    onClick={this.handleSignup}
                                    color="primary"
                                    variant="raised"
                                    > SIGN UP </Button>
                                <Typography
                                    paragraph={true}
                                    variant="caption"
                                    align="center"
                                > By signing up, you agree to the terms and conditions
                                </Typography>  
                            </div>
                        </div>
                        <Divider />
                        <div className={classes.footer}>
                            <Typography
                            > Already registered? 
                            </Typography>
                            <Button
                                
                            > Login 
                            </Button>     
                        </div>                       
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(SignUp)