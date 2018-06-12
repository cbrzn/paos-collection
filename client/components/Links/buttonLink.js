import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const ButtonLink = ({ title, to, color }) => (
    <Link to={to} style={{
        textDecoration: 'none',
    }}>
        <Button style={{ color: color }}> {title} </Button>
    </Link>
);

ButtonLink.defaultProps = {
    color: 'white',
}

ButtonLink.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default ButtonLink