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

export default withStyles(styles)(ImageViewer)