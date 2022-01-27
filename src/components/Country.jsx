import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Typography from '@mui/material/Typography';
import IndeterminateCheckBox from '@mui/icons-material/IndeterminateCheckBox';

class Country extends Component {
   

    render() {

        const {country, onIncrease, onDecrease} = this.props;

        return (
            <Card sx={{bgcolor: 'lightGray', minWidth: 275 }}>
                <CardContent>

                    {/* <div> {country.country}</div> */}

                    <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
                        Country : {country.country}
                    </Typography>   
                    <Typography sx={{ mb: 1.5 }} >
                        Gold Medals : {country.goldMedalCount} 
                    </Typography>  
                    <AddBoxIcon size="small" onClick={() => onIncrease(country)} color='primary'></AddBoxIcon>
                    <IndeterminateCheckBox size="small" 
                        onClick={() => onDecrease(country)}     
                        color='secondary'
                        disabled={country.goldMedalCount === 0}>
                    </IndeterminateCheckBox>     
                </CardContent>
                       
            </Card>
        );
    }
}

export default Country;