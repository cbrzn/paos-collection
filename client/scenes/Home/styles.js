export default (theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing.unit * 2,
    },
    list: {
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
    },
    item: {
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`
    },
})
