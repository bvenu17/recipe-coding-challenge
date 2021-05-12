import React from 'react';

// material ui
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
// styles
import Styles from './styles/Navbar.styles';

const Navbar = () => {
  const classes = Styles();

  return (
    <AppBar position='sticky' elevation={3} className={classes.appbar}>
      <Container>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <Toolbar>
            <Link href='/'>
              <Typography variant='subtitle1' className={classes.title}>
                Recipe App
              </Typography>
            </Link>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
