import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// material ui
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// api
import { getByCategory } from '../../../api/pages/Search';

// styles
import Styles from '../styles/Categories.styles';

const CategoryList = ({ match }) => {
  const classes = Styles();
  const history = useHistory();
  const [details, setDetails] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getByCategory(match.params.id);
        setDetails(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [match.params.id]);

  const handleClick = async (id) => {
    history.push(`/recipe/${id}`);
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
                    onClick={() => handleClick(item.strMeal)}
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

export default CategoryList;
