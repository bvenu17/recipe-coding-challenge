import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main
  },
  header: {
    fontWeight: 'bold',
    color: theme.palette.white,
    marginTop: theme.spacing(2)
  },
  errorText: {
    marginTop: theme.spacing(2),
    color: 'red',
    alignSelf: 'center'
  },
  btn: {
    marginTop: theme.spacing(2),
  }

}))