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

class Details extends Component {
    
    state = {
        title: 'Title lazo',
        description: 'Best lazo ever made by Hefesto with the skin of a unicorn, stylized by Afrodita, and some other greek Gods who helps for this being possible',
        price:134,
        available:1,
        expanded: null,
    }

    handleChange = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    };

    componentDidMount() {
        this.setState({
            // ITEM INFO
        });
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