// Repository:  country
// Author:      Thato Ramalepa
// Version:     2.1

import React, { Component } from 'react';
import './App.css';
import CountryCounter from './components/CountryCounter';
import Country from './components/Country';
import { Grid } from '@material-ui/core';


class App extends Component {

  state = {
    countries: [
      { id: 1, country: 'USA', goldMedalCount: 0 },
      { id: 2, country: 'China', goldMedalCount: 2 },
      { id: 3, country: 'Germany', goldMedalCount: 3},
    ]
  }

  render() { 
    return ( 
      <div className="App">
        <Grid container spacing={4}
          justifyContent='center'>
          <Grid item xs={6}>
            { this.state.countries.map(country => <Country  
              key= {country.id}
              country={country} />) }
          </Grid>
        </Grid>  
        <CountryCounter totalCountries={ this.state.countries.length }/>           
      </div>
     );
  }
}
 
export default App;