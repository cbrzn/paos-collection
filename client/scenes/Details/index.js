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
    quantity = React.createRef()
    state = {
        title: '',
        description: '',
        price: 0,
        available: 0,
        id: '',
        expanded: true,
    }

    componentDidMount() {
        const { description, price, stock } = this.props.location.state.details[0] 
        const { id } = this.props.location.state
        this.setState({ 
            title: description,
            description,
            price,
            available:stock,
            id
        })
    }

    addToCart = () => {
        const { price, id } = this.state
        const quantity = this.quantity.current.value
        fetch('/cart/new', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ price, quantity, id })
        })
        .then(response => response.json())
        .then(data => {
            switch (data.status) {
                case 200:
                    alert('product added to cart')
                break
                case 500:
                    alert('something has happened! call the developers')
                break
            }
        })
    }

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
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
                                <input ref={this.quantity}/>
                                <Button
                                    color="primary"
                                    variant="raised"
                                    onClick={this.addToCart}
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