import React from 'react';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    bootstrapFormLabel: {
        fontSize: 18,
    },
    bootstrapRoot: {
        padding: 0,
        // 'label + &': {
        //     marginTop: theme.spacing.unit * 3,
        // },
        // padding: theme.spacing.unit*2,
    },
    bootstrapInput: {
        margin: theme.spacing.unit*2,
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        width: 'calc(100% - 14px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
})
function Input({ classes, className }) {

    return <TextField
        defaultValue={1}
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          },
        }}
        InputLabelProps={{
            shrink: true,
            className: classes.bootstrapFormLabel,      
        }}
      />
}

export default withStyles(styles)(Input)