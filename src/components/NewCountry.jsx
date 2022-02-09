import React, { Component } from 'react';

class NewCountry extends Component {
    state = {  }
    handleClick = () => {
      const country= prompt('Enter country name');
      if (country && country.trim().length > 0) {
        this.props.addNewCountry(country);
      }
    }
    render() { 
      return (
        <div className='newCountryButton'>
          <button onClick={ this.handleClick }>New Country</button>
        </div>
      );
    }
  }
  

export default NewCountry;