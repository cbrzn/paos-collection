import React from 'react';
import { withRouter } from 'react-router';
import InvitedOptions from './invited';

export default withRouter(({ user, location }) => {
    const { pathname } = location;

    if(pathname !== '/login') {
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
                return <button>invited</button>
            }
        }
    } else {
        return null;
    }
})

