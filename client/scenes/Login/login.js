import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    TextField,
    Button,
    Typography,
    Paper,
    CircularProgress,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        marginTop: theme.spacing.unit * 5,
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    caption: {
        marginTop: theme.spacing.unit * 1,
    },
	paper: {
        padding: '25px 50px 25px 50px',
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	wrapper: {
        marginTop: theme.spacing.unit*2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        margin: '16px 0px 8px 0px',
        flexBasis: 200,
    }
});

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
            <div className={classes.root}>
                <Grid container
                    alignItems="center"
                    justify="center"
                    className={classes.container}
                >
                    <Grid item lg={3} md={4} sm={6} xs={10}>
                        <Paper className={classes.paper}>
                            <form noValidate autoComplete="off">
                                <TextField
                                    id="username"
                                    label="Username"
                                    margin="normal"
                                    value={props.username}
                                    fullWidth
                                    onChange={handleTextChange('username')}                                    
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
                                        <Link to="/" style={{ textDecoration: 'none' }}
                                        > Sign Up! </Link>
                                    </Typography>
                                </div>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
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