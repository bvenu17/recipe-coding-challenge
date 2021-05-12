import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// material ui
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

// styles
import Styles from '../styles/Banner.styles';

const Banner = () => {
  const classes = Styles();
  const history = useHistory();
  const [searchType, setSearchType] = useState('Recipe');
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState();

  const handleChange = (event) => {
    setSearchType(event.target.value);
  };

  const getSearch = (event) => {
    setSearchText(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchType === 'Recipe') {
      history.push(`/recipe/${searchText}`);
    } else {
      history.push(`/ingredient/${searchText}`);
    }
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Typography align='center' variant='h1'>
          Welcome to the Recipe App
        </Typography>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='center'
        >
          <Select
            labelId='demo-controlled-open-select-label'
            id='demo-controlled-open-select'
            className={classes.dropdown}
            open={open}
            variant='outlined'
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            value={searchType}
            onChange={handleChange}
          >
            <MenuItem value='Recipe'>Recipe</MenuItem>
            <MenuItem value='Ingredient'>Ingredient</MenuItem>
          </Select>
          <TextField
            id='outlined-basic'
            label='Enter search term'
            variant='outlined'
            onChange={getSearch}
            InputProps={{
              disableUnderline: true,
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
            className={classes.textField}
          />
          <Button
            onClick={handleSubmit}
            className={classes.btn}
            variant='contained'
          >
            Search
          </Button>
        </Box>
        <Box mt={5} display='flex' justifyContent='center'>
          <Link href='/categories'>
            <Typography variant='subtitle1' className={classes.choose}>
              Choose a category
            </Typography>
          </Link>
          <Link href='/favourites'>
            <Typography variant='subtitle1' className={classes.choose}>
              Your favourites
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
