import { makeStyles, Theme } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        minHeight: '91vh',
        marginLeft: '3em',
        marginRight: '3em',
        fontFamily: 'Open sans Semibold',
        fontSize: '1.5rem',
        color: 'white',
        letterSpacing: '1px'
    },
    rootNarrow: {
        display: 'flex',
        alignItems: 'center',
        minHeight: '30vh',
        marginLeft: '3em',
        marginRight: '3em',
        fontFamily: 'Open sans Semibold',
        fontSize: '1.5rem',
        color: 'white',
        letterSpacing: '1px'
    },
    centerBox: {
        justifyContent: 'center'
    },
    leftBox: {
        textAlign: 'left'
    },
    rightBox: {
        textAlign: 'right'
    }

}))
