import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
    Grid,
    Paper,
    Button,
    ButtonBase,
    Typography,
    Collapse,
    Divider,
} from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { BootInput, ImageViewer } from '../../components';
import styles from './styles';
import queryString from 'query-string'

class Details extends Component {
    state = {
        title: '',
        description: '',
        price: 0,
        available: 0,
        expanded: true,
        images:[]
    }

    loadData() {
        // const id = this.props.match.params.id
        // fetch('../product/show', {
        //     method: 'post',
        //     headers: {
        //         'Content-Type':'application/json'
        //     },
        //     body: JSON.stringify({ id })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     this.setState({
        //         title: data.prod.name
        //     })
        //     var promises = []
        //     for (var i in data.images) {
        //        var req = this.setState(prevState => ({
        //             images:[...prevState.images, data.images[i]] 
        //         }))
        //         promises.push(req)
        //     }
        // })
    }

    componentDidMount() {
        this.loadData()
    }

    render() {
        const {classes} = this.props;
        const {expanded} = this.state;
        const { image, id } = this.props.location.state

        return ( 
            <div className={classes.root}>
                <Paper elevation={4} className={classes.paper}>
                    <Grid container justify="center">
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <ImageViewer image={image} id={id}/>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={8}>
                            <Typography 
                                variant="title"
                                className={classes.title}
                            >
                                {this.state.title}
                            </Typography>
                            <Typography
                                variant="subheading"
                                className={classes.price}
                            >
                                $ {this.state.price}
                            </Typography>        
                            <div className={classes.description}>
                                <ButtonBase 
                                    onClick={this.handleChange} 
                                    className={classes.expand}
                                >
                                    <Typography>
                                        Description
                                    </Typography>                                    
                                </ButtonBase>
                                <Divider />
                                <Collapse in={expanded}>
                                    <Typography>
                                        {this.state.description}
                                    </Typography>
                                </Collapse>
                            </div>
                            <div className={classes.actions}>
                                <BootInput />
                                <Button
                                    color="primary"
                                    variant="raised"
                                > ADD *ICON* </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </div>            
        );
    }
}

export default withStyles(styles)(Details);