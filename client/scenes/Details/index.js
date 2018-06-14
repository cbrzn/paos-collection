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
        })
        .then(response => response.json())
        .then(product => {
            this.setState({
                title: product.name
            })
        })
    }

    render() {
        const {classes} = this.props;
        const {expanded} = this.state;

        return ( 
            <div className={classes.root}>
                <Paper elevation={4}>
                    <Grid container justify="center">
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <ImageViewer />
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