export default (theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        marginTop: theme.spacing.unit * 5,
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    caption: {
        marginTop: theme.spacing.unit * 1,
    },
	paper: {
        padding: '25px 50px 25px 50px',
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	wrapper: {
        marginTop: theme.spacing.unit*2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        margin: '16px 0px 8px 0px',
        flexBasis: 200,
    }
});