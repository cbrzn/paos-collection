import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// if (fetching)
//     return (
//         <Loading />
//     )
// else if (!fetching && !user)

const PrivateRoute = ({ component: Component, user, ...rest }) => {
    
    if(!user)
        return <Redirect to={{ pathname: '/' }} />;
    return (
        <Route
            {...rest}
            render={(props) => <Component {...props} />}
        />
    );
};

PrivateRoute.propTypes = {
    Component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    user: PropTypes.any,
};

