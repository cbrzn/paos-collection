import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
    Typography,
    ButtonBase,
} from '@material-ui/core';

// import Image from 'https://res.cloudinary.com/zingaring/image/upload/v1525380478/euzindbrfij237pkbqo2.jpg';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    imageSrc: {
        position: 'absolute',
        width: '100%',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        // backgroundPosition: 'center 40%',
    },
    focusVisible: {},
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
    },
});

// ITEMS 
class Item extends Component {
    
    render() {
        const path = require.context('../../assets/images/', true);
        const { classes, data } = this.props;

        return (
            <div className={classes.root}>
                <ButtonBase
                    component={Link} to="/details"
                    focusRipple
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: '100%',
                    }}
                >
                    <span
                        className={classes.imageSrc}
                        style={{
                            backgroundImage: `url(${this.props.images[this.props.index]})`,
                        }}
                    />
                </ButtonBase>
            </div>
        );
    }
}

export default withStyles(styles)(Item)