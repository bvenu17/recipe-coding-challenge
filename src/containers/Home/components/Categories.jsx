import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// material ui
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// api
import { getCategories } from '../../../api/pages/Search';

// styles
import Styles from '../styles/Categories.styles';

const Categories = ({ match }) => {
  const classes = Styles();
  const history = useHistory();
  const [details, setDetails] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getCategories();
        setDetails(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const handleClick = async (category) => {
    history.push(`/categories/${category}`);
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
            details.categories.map((item) => {
              return (
                <Grid item xs={3}>
                  <Box
                    display='flex'
                    flexDirection='column'
                    className={classes.recipeBox}
                    onClick={() => handleClick(item.strCategory)}
                  >
                    <img
                      src={item.strCategoryThumb}
                      className={classes.img}
                      alt='thumbnail'
                    />
                    <Typography noWrap variant='subtitle1'>
                      {item.strCategory}
                    </Typography>
                    <Typography className={classes.description} variant='body1'>
                      {item.strCategoryDescription}
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

export default Categories;
