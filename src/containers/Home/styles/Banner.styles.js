import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
  },
  dropdown: {
    width: theme.spacing(20),
    marginTop: theme.spacing(2),
    borderRadius: theme.spacing(1.5),
    // padding:theme.spacing(2),
    // border:`1px solid ${theme.palette.primary.main}`
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  notchedOutline: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1.5),
  },
  btn: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    padding: theme.spacing(1),
    width: theme.spacing(15),
    textTransform: 'capitalize',
    background: theme.palette.primary.main,
    color: theme.palette.white
  },
  choose: {
    marginLeft: theme.spacing(2),
    background: theme.palette.black,
    color: theme.palette.white,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1.5),
    cursor: 'pointer'
  }
}))