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
})

const TypographyLink = ({ classes, title, to, color, variant}) => (
    <Link to={to} style={{
        textDecoration: 'none',
    }}>
        <Typography
            variant={variant}
            className={classes.typography} 
            style={{ color: color }}> {title} 
        </Typography>
    </Link>
);

TypographyLink.defaultProps = {
    color: 'white',
    variant: 'body1',
}

TypographyLink.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    color: PropTypes.string,
    variant: PropTypes.string,
}

export default withStyles(styles)(TypographyLink);