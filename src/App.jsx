import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// material ui imports
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Box from '@material-ui/core/Box';

// base components
import theme from './theme';
import { StateProvider } from './context';
import ErrorBoundary from './components/ErrorBoundary';

// general components
import Home from './containers/Home';
import Navbar from './components/Navbar';
import Recipes from './containers/Home/components/Recipes';
import Ingredients from './containers/Home/components/Ingredients';
import Categories from './containers/Home/components/Categories';
import CategoryList from './containers/Home/components/CategoryList';
import Favourites from './containers/Home/components/Favourites';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <StateProvider>
          <Router>
            <Box>
              <Navbar />
              <Switch>
                {/* add routes here */}
                <Route key={1} path='/' exact={true} component={Home} />
                <Route
                  key={1}
                  path='/recipe/:search'
                  exact={true}
                  component={Recipes}
                />
                <Route
                  key={2}
                  path='/ingredient/:search'
                  exact={true}
                  component={Ingredients}
                />
                <Route
                  key={3}
                  path='/categories'
                  exact={true}
                  component={Categories}
                />
                <Route
                  key={4}
                  path='/categories/:id'
                  exact={true}
                  component={CategoryList}
                />
                <Route
                  key={5}
                  path='/favourites'
                  exact={true}
                  component={Favourites}
                />
              </Switch>
            </Box>
          </Router>
        </StateProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
