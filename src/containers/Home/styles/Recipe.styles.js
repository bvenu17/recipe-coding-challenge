import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  grid: {
    marginTop: theme.spacing(10),
  },
  recipeBox: {
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1.5),
  },
  description: {
    height: theme.spacing(10),
    overflowY: 'scroll'
  },
  list: {
    width: '100%',
    height: theme.spacing(15),
    overflowY: 'scroll'
  },
  img: {
    width: '100%',
    height: theme.spacing(20),
  },
  fav: {
    width: '30%',
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontWeight: '600',
    borderRadius: theme.spacing(1.5),
    color: theme.palette.white,
    background: 'grey',
    cursor: 'pointer'
  }
}))