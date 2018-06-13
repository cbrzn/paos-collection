export default (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: theme.spacing.unit*5,
    },
    container: {
        padding: '25px 45px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    actions: {
        marginTop: theme.spacing.unit*3,
        width: '100%',
    },
    information: {
        width: '75%',
        marginTop: theme.spacing.unit*2,
        width: '100%'
    },
    footer: {
        display:'flex',
        justifyContent:'space-between',
        alignContent: 'center',
        alignItems: 'center',
        padding: `${theme.spacing.unit}px ${theme.spacing.unit}px`,        
    },
})