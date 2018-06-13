export default (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        margin: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 8}px 0px`,
    },
    title: {
        marginTop: theme.spacing.unit*4,
    },
    price: {
        marginTop: theme.spacing.unit,        
    },
    description: {
        marginTop: theme.spacing.unit*3,
    },
    expand: {
        flexGrow:1,
        width:'100%',
        display:'flex',
        justifyContent:'flex-start',
    },
    actions: {
        display:'flex',        
        justifyContent: 'flex-end',
        alignItems: 'center',            
        paddingRight: theme.spacing.unit*2,
    },
});