import React from 'react';
import { withRouter } from 'react-router';
import {
    withStyles,
    Typography,
} from '@material-ui/core';
import invitedStyles from './Styles/invitedOptions';
import TypographyLink from './typographyLink';

export default withRouter(({ user, location }) => {
    const { pathname } = location;

    if(pathname !== '/login' && pathname !== '/signup') {
        switch (user.type) {
            case 'invited': {
                return <InvitedOptions />
            }
            case 'user': {
                return <button>user</button>
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