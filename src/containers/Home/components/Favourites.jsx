import React, { useEffect, useState } from 'react';

// material ui
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// api
import { getRecipeById } from '../../../api/pages/Search';

// styles
import Styles from '../styles/Recipe.styles';

const Favourites = () => {
  const classes = Styles();
  const [details, setDetails] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const favMeals = JSON.parse(localStorage.getItem('favMeals'));
        let all = [];
        for (let i in favMeals) {
          const res = await getRecipeById(favMeals[i]);
          all.push(res.data.meals[0]);
        }
        setDetails(all);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

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
            details.map((item) => {
              return (
                <Grid item xs={4}>
                  <Box
                    display='flex'
                    flexDirection='column'
                    className={classes.recipeBox}
                  >
                    <img
                      src={item.strMealThumb}
                      className={classes.img}
                      alt='thumbnail'
                    />
                    <Typography variant='subtitle1'>{item.strMeal}</Typography>
                    <Typography variant='body1' className={classes.fav}>
                      Mark as favourite
                    </Typography>
                    <Typography className={classes.description} variant='body1'>
                      {item.strInstructions}
                    </Typography>

                    <Box mt={2}>
                      <Typography variant='subtitle2'>Ingredients:</Typography>
                    </Box>
                    <Box
                      display='flex'
                      flexDirection='column'
                      justifyContent='space-evenly'
                      mt={1}
                      className={classes.list}
                    >
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient1}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient2}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient3}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient4}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient5}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient6}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient7}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient8}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient9}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient10}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient11}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient14}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient15}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient16}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient17}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient18}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient19}
                      </Typography>
                      <Typography
                        variant='body1'
                        className={classes.ingredient}
                      >
                        {item.strIngredient20}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Favourites;
