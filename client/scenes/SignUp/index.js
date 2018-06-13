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
import styles from './styles';

class SignUp extends Component {

    state = {
        name: '',
        password: '',
        email: '',
        location: '',
    }

    handleTextChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    }

    render() {
        const { classes } = this.props;
        const { name, password, email, location } = this.state;

        return (
            <div className={classes.root}>
                <Grid container justify="center">
                    <Grid item lg={3}>
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
                                        id="password"
                                        label="Password"
                                        margin="dense"
                                        value={password}
                                        type="password"
                                        fullWidth
                                        onChange={this.handleTextChange('password')}
                                    />
                                </form>
                                <div className={classes.actions}>
                                    <Button                                    
                                        color="primary"
                                        variant="raised"
                                        fullWidth
                                    > SIGN UP </Button>
                                </div>
                                <div className={classes.information}>
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
            </div>
        )
    }
}

export default withStyles(styles)(SignUp)