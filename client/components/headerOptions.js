import React from 'react';
import { withRouter } from 'react-router';
import {
    withStyles,
    Typography,
    IconButton,
    Menu,
    MenuItem,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { invitedStyles, userStyles } from './Styles/headerOptions';
import TypographyLink from './typographyLink';

export default withRouter(({ user, location }) => {
    const { pathname } = location;

    if(pathname !== '/login' && pathname !== '/signup') {
        switch (user.type) {
            case 'invited': {
                return <InvitedOptions />
            }
            case 'user': {
                return <UserOptions />
            }
            case 'admin': {
                return <button>admin</button>
            }
            default: {
                return <InvitedOptions />
            }
        }
    } else {
        return null;
    }
});

const _InvitedOptions = ({ classes }) => (
    <div className={classes.root}>
        <TypographyLink className={classes.link} to="/login" title="LOGIN" />
        <Typography color="inherit" variant="body2" className={classes.or}> or </Typography>
        <TypographyLink className={classes.link} to="/signup" title="SIGN UP" />
    </div>
);
const InvitedOptions = withStyles(invitedStyles)(_InvitedOptions);

class _UserOptions extends React.Component {

    state = {
        anchor: null,
    }

    handleMenu = (event) => this.setState({ anchorEl: event.currentTarget });
    handleClose = () => this.setState({ anchorEl: null });

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        );
    }
}
const UserOptions = withStyles(userStyles)(_UserOptions);