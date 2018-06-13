export default (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        width: '100%',
        marginTop: theme.spacing.unit*3,
        overflowX: 'auto',
    },
    actions: {
        display: 'flex',
        justifyContent:'center',
        marginTop: theme.spacing.unit*2,
    }
})