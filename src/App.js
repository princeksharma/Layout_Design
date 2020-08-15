import React from 'react';
import {Grid} from '@material-ui/core';
import Layout from './Layout';
import Header from './Header';

const App = () => {
  return (
      
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
          <Grid container>
            <Grid item xs={1} sm={1} />
            <Grid item xs={10} sm={10} >
              <Layout />
            </Grid >
            <Grid item xs={1} sm={1} />
          </Grid>
      </Grid>
  );
}

export default App;
