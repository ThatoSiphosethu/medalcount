import React, { Component } from 'react';

class CountryCounter extends Component {
    render() { 
        return ( <div className='counter'>Total countries: { this.props.totalCountries }</div> );
        
    }
}

export default CountryCounter;