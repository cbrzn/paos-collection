export default (theme) => ({
    paper: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: theme.spacing.unit*2,
        paddingTop: theme.spacing.unit*2,
    },
    row: {
        marginBottom: theme.spacing.unit*2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    key: {
        marginRight:theme.spacing.unit*4,
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
        
    },
})