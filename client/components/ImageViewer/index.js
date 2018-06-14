import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton,
} from '@material-ui/core';
import Image from '../../assets/images/w.jpg';
import PropTypes from 'prop-types';
import queryString from 'query-string'

const styles = theme => ({
    container: {
        padding:`${theme.spacing.unit*4}px 0px`,
    },
    main: {
        
    },
    group: {

    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
});

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
                    <img
                        src={images[selectedImage].url}
                        alt="Image title"
                    />
                </Grid>
                <Grid item lg={9} mg={9} sm={9} xs={9}>
                    <GridList className={classes.gridList} cols={4}>
                        {images.map((img,i) => (
                            <GridListTile key={img.title} rows={0.5}>
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

/*

<StarBorderIcon className={classes.title} />
<div className={classes.group}>
    {
        images.map((img, i) => (
            <img key={i}
                src={img}
                style={{
                    width: size,
                    padding: '0px 5px',
                }}
            />
        ))
    }
</div>*/

export default withStyles(styles)(ImageViewer)