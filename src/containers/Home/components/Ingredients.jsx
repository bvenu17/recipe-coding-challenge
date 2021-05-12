import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// material ui
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// api
import { getByIngrdient, getRecipeById } from '../../../api/pages/Search';

// styles
import Styles from '../styles/Ingredients.styles';

const Ingredients = ({ match }) => {
  const classes = Styles();
  const history = useHistory();
  const [details, setDetails] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getByIngrdient(match.params.search);
        if (res.data.meals === null) {
          history.push('/');
        }
        setDetails(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [match.params.search]);

  const handleClick = async (id) => {
    const res = await getRecipeById(id);
    const mealName = res.data.meals[0].strMeal;
    history.push(`/recipe/${mealName}`);
  };
  return (
    <Box className={classes.root}>
      <Container>
        <Box mt={5} display='flex' justifyContent='center'>
          <Link href='/'>
            <Typography variant='h2'>Go back</Typography>
          </Link>
        </Box>

        <Grid container spacing={2} className={classes.grid}>
          {details &&
            details.meals.map((item) => {
              return (
                <Grid item xs={3}>
                  <Box
                    display='flex'
                    flexDirection='column'
                    className={classes.recipeBox}
                    onClick={() => handleClick(item.idMeal)}
                  >
                    <img
                      src={item.strMealThumb}
                      className={classes.img}
                      alt='thumbnail'
                    />
                    <Typography noWrap variant='subtitle1'>
                      {item.strMeal}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Ingredients;
