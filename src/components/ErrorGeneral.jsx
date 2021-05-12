import React from 'react';

// material ui
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// styles
import ErrorStyles from './styles/ErrorGeneral.styles';

const ErrorGeneral = ({ errorMessage }) => {
  const classes = ErrorStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth='lg'>
        <Box
          component='span'
          display='flex'
          flexDirection='column'
          alignItems='center'
          textAlign='center'
          padding={5}
        >
          <Typography variant='h3' className={classes.header} component='h2'>
            Something went wrong!
          </Typography>
          <Typography className={classes.errorText}>{errorMessage}</Typography>
          <Button className={classes.btn} variant='contained' href='/'>
            Go back to home page
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ErrorGeneral;
