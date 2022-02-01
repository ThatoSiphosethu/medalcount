// Repository:  country
// Author:      Thato Ramalepa
// Version:     2.1

import React, { Component } from 'react';
import './App.css';
// import CountryCounter from './components/CountryCounter';
import Country from './components/Country';
// import MedalsCounter from './components/MedalsCounter';
import { Grid } from '@material-ui/core';


class App extends Component {

  state = {
    countries: [
      { id: 1, country: 'USA', Gold: 0, Silver: 2, Bronze: 3 },
      { id: 2, country: 'China', Gold: 2, Silver: 2, Bronze: 3 },
      { id: 3, country: 'Germany', Gold: 3, Silver: 2, Bronze: 3},
    ],

    medals: [
      {id: 1, type: 'Gold'},
      {id: 2, type: 'Silver'},
      {id: 3, type: 'Bronze'}
    ],
  };

 
  increament = (countryId, medalType) => {
    const countries = [...this.state.countries];
    const idx = countries.findIndex(c => c.id === countryId);
    countries[idx][medalType] += 1;    
    this.setState({countries: countries});
  };

  decrease = (countryId, medalType) => {
    const local_countries = [...this.state.countries];
    const idx = local_countries.findIndex(c => c.id === countryId);
    if (local_countries[idx][medalType] > 0) {
      local_countries[idx][medalType] -= 1;
      this.setState({countries: local_countries});
    }
  };

  

  overallMedalCount() {
    const gold = this.state.countries.reduce((a, b) => a + b.Gold, 0);
		const silver = this.state.countries.reduce(
			(a, b) => a + b.Silver,
			0
		);
		const bronze = this.state.countries.reduce(
			(a, b) => a + b.Bronze,
			0
		);
		const total = gold + silver + bronze;
		return total;

  }

  

  render() { 
 

    return ( 
      <div className="App">
        <div>Total Medals {this.overallMedalCount()}</div>
        <Grid container spacing={4}
          justifyContent='center'>
          <Grid item xs={6}>
            { this.state.countries.map(country => (
              <Country  
                  key= {country.id}
                  country={country}
                  medals={this.state.medals}
                  onIncrease={this.increament}
                  onDecrease={ this.decrease } 
              />              
            ))}


          </Grid>
        </Grid>  
        {/* <CountryCounter totalCountries={ this.state.countries.length }/>  
        <MedalsCounter/>          */}
      </div>
     );
  }
}
 
export default App;