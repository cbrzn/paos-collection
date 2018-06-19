export default (theme) => ({
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
        display:'flex',
        // justifyContent:'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing.unit*3,
        width: '100%',
    },
    footer: {
        display:'flex',
        justifyContent:'space-between',
        alignContent: 'center',
        alignItems: 'center',
        padding: `${theme.spacing.unit}px ${theme.spacing.unit}px`,        
    },
})