import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

const styles = () => ({
    typography: {
        '&:hover': {
            opacity:0.8,
        }
    }
});

const TypographyLink = ({ title, to, className, color, variant }) => (
    <Link to={to} style={{
        textDecoration: 'none',
    }}>
        <Typography
            className={className} 
            variant={variant}
            color={color}
            > {title} 
        </Typography>
    
    </Link>
);

TypographyLink.defaultProps = {
    color: 'inherit',
    variant: 'body1',
}

TypographyLink.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
    color: PropTypes.string,
    variant: PropTypes.string,
}

export default TypographyLink;