import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import queryString from 'query-string'
import styles from './Styles/imageViewer';

import Image from '../assets/images/w.jpg';

// ITEMS 
class ImageViewer extends Component {

    state = {
        images: [{url: Image, title: 'test'}],
        selectedImage: 0,
    }

    componentDidMount() {
        const query = queryString.parse(location.search)
        console.log(query)
        const id = query.id
        console.log(query.id)
        fetch('./product/show', {
            method: 'post',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ id })
        }).then(response => response.json())
            .then(product => {
              console.log([product])
            })
    }

    render() {
        const { classes } = this.props;
        const { images, selectedImage } = this.state;
        
        return (
            <Grid container justify="center" className={classes.container}>
                <Grid item lg={9} mg={9} sm={9} xs={9} className={classes.main}>
                    <center>
                    <img
                        src={images[selectedImage].url}
                        alt="Image title"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                    />
                    </center>
                </Grid>
                <Grid item lg={9} mg={9} sm={9} xs={9}>
                    <GridList className={classes.gridList} cols={4}>
                        {images.map((img,i) => (
                            <GridListTile key={img.title} rows={0.5} >
                                <img src={img.url} alt="title" />
                            </GridListTile>
                        ))}
                    </GridList>
                </Grid>
            </Grid>
        );
    }
}

ImageViewer.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ImageViewer)