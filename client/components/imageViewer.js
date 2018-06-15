import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton,
} from '@material-ui/core';
import Image from '../assets/images/w.jpg';
import PropTypes from 'prop-types';
import queryString from 'query-string'

const styles = theme => ({
    container: {
        padding:`${theme.spacing.unit*4}px 0px`,
    },
    main: {
        width: 800,
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
        loaded: false,
        images: [],
        selectedImage: [],
    }

    componentDidMount() {
        const id = this.props.id
        fetch('./product/show', {
            method: 'post',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ id })
        }).then(response => response.json())
            .then(data => {
                const first = this.props.image
                let arr = [first]
                for (var i in data.images) {
                    if (data.images[i].url !== this.props.image.url) { 
                        arr.push(data.images[i])
                        if (data.images.length == arr.length) {
                            this.setState(prevState => ({
                                loaded: true,
                                selectedImage: 0,
                                images:prevState.images.concat(arr)
                            }))
                        }  
                    }
                }
        }).catch(err => {
            console.log(err)
        })
    }

    select = page => {
        this.setState({
            selectedImage: page
        })
    }

    render() {
        const { classes } = this.props;
        const { images, selectedImage } = this.state;
    
        return (
            ((this.state.loaded == false) ?
             <h1> Loading </h1>
            :
            <Grid container justify="center" className={classes.container}>
                <Grid item lg={9} mg={9} sm={9} xs={9} className={classes.main}>
                    <img
                        src={images[selectedImage].url}
                        alt="Image title"
                    />
                </Grid>
                <Grid item lg={9} mg={9} sm={9} xs={9}>
                    <GridList className={classes.gridList} cols={4}>
                    {images.map((img,i) => {
                        if(images[selectedImage].url != img.url) 
                            return  <GridListTile key={i} rows={0.5}>
                                        <img src={img.url} alt="title" onClick={() => this.select(i)}/>
                                    </GridListTile>
                        }
                    )}
                    </GridList>           
                </Grid>
            </Grid>
            )
        )
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