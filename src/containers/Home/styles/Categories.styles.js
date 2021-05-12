import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  grid:{
    marginTop:theme.spacing(10),
  },
  recipeBox: {
    padding:theme.spacing(2),
    border:`1px solid ${theme.palette.primary.main}`,
    borderRadius:theme.spacing(1.5),
    cursor:'pointer'
  },
  description:{
    height:theme.spacing(10),
    overflowY: 'scroll'
  },
  img:{
    width:'100%',
    height:theme.spacing(20),
  }
}))