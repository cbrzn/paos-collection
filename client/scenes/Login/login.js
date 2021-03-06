import React, { Component, Fragment } from 'react';
import {
    withStyles,
    Grid,
    TextField,
    Button,
    Typography,
    Paper,
    CircularProgress,
    IconButton,
    InputAdornment,
} from '@material-ui/core';
import { Visibility, VisibilityOff, } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TypographyLink from '../../components/typographyLink.js';
import styles from './styles';

class Login extends Component {
    
    state = {
        showPassword: false,
    }

    handleShowPassword = () => {
        this.setState({showPassword:!this.state.showPassword});
    }

    render() {
        const { handleTextChange, handleLogin, classes, fetching, ...props } = this.props;

        return (
            <Grid container
                alignItems="center"
                justify="center"
                className={classes.container}
            >
                <Grid item lg={3} md={4} sm={6} xs={10}>
                    <Paper className={classes.paper}>
                        <form noValidate autoComplete="off">
                            <TextField
                                autoFocus
                                id="email"
                                label="Email"
                                margin="normal"
                                value={props.email}
                                fullWidth
                                onChange={handleTextChange('email')}
                            />
                            <TextField
                                id="password"
                                label="Password"
                                margin="normal"
                                value={props.password}
                                fullWidth
                                onChange={handleTextChange('password')}
                                type={this.state.showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment:(
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Toggle password visibility"
                                                onClick={this.handleShowPassword}
                                            >
                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />                                
                            <div className={classes.wrapper}>
                                {fetching ? (
                                    <CircularProgress size={36} className={classes.progress} />
                                ) : (
                                        <Fragment>
                                            <Button
                                                color="primary"
                                                variant="raised"
                                                onClick={handleLogin}
                                            > LOGIN </Button>

                                        </Fragment>
                                    )}
                                <Typography variant="caption" className={classes.caption}>
                                    Don't have an account?
                                    <Link to="/signup" style={{ textDecoration: 'none' }}
                                    > Sign Up! </Link>
                                </Typography>
                            </div>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

Login.propTypes = {
    handleTextChange: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    props: PropTypes.object,
    fetching: PropTypes.bool,
}

export default withStyles(styles)(Login)