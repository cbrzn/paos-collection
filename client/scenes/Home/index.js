import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid, 
    Typography,
} from '@material-ui/core';
import { Item, SearchBar, Pagination } from '../../components';
import LinearProgress from '@material-ui/core/LinearProgress';
import styles from './styles'

class Home extends Component {

    state = {
        items: [],
        total: 10, // Numero total de paginas por paginacion
        display: 3, // Cuantos se van a mostrar
        number: 1, // Pagina actual
        fetching: false,
    }

    handleSearch = (value) => {
        console.log(value);
    }

    componentDidMount() {
        // Fetch() ...
        this.setState({items:[1,2,3,4,5,6]});
    }

    setPage = (number) => {
        this.setState({ number, fetching:true });
        setInterval(() => this.setState({ fetching: false }), 3000);
        // Move between array elements... Change array elements... IDK, yet.
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
            <Grid container justify="center">
                <Grid item lg={12} className={classes.title}>
                    <Typography variant="display1">
                        TITLE {this.state.number}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <SearchBar
                        onRequestSearch={this.handleSearch}
                    />
                    <Typography variant="display1">
                        Searching area
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    
                        { (this.state.fetching) ? (
                            <Grid container justify="center" className={classes.list}>
                                <Grid item lg={12} >
                                    <LinearProgress /> 
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid container className={classes.list}>
                            {this.state.items.map((item, i) => (                                
                                <Grid item className={classes.item} lg={3} key={i}>
                                    <Item data={item}/>
                                </Grid>                                
                            ))}
                            </Grid>            
                        )}
                </Grid>
                <Grid item lg={10} style={{display:'flex',justifyContent:'center'}}>
                        <Pagination
                            total={10}
                            current={this.state.number}
                            display={this.state.display}
                            onChange={this.setPage}
                            stylePrimary={{color:'blue'}}
                        />
                </Grid>
            </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Home)