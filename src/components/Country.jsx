import React, { Component } from 'react';
import Medal from './Medal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import AddBoxIcon from '@mui/icons-material/AddBox';
import Typography from '@mui/material/Typography';
// import IndeterminateCheckBox from '@mui/icons-material/IndeterminateCheckBox';

class Country extends Component {

    medalsPerCountry(country, medals) {
        // let medalCount = 0;
        // medal.forEach(medal => { medalCount += country[medal.type];
        // });
        return medals.reduce((a, b) => a + country[b.type], 0);   
      }

    render() {

        const {country, medals, onIncrease, onDecrease, onDelete} = this.props;

        return (
            <Card sx={{bgcolor: 'lightGray', minWidth: 275 }}>
                <CardContent>

                    {/* <div> {country.country}</div> */}

                    <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
                        {country.country} : {this.medalsPerCountry(country, medals)} 
                    </Typography>   
                    <Typography sx={{ mb: 1.5 }} >
                        { medals.map(medal => 
                           <Medal
                            key={medal.id}
                            medal={medal}
                            country={country}
                            onIncrease={onIncrease}
                            onDecrease={ onDecrease } 
                           /> 
                        )}
                    </Typography> 
                    <Typography>
                        <button onClick={() => onDelete(country.id)}>Delete Country</button>
                    </Typography>
                 
                </CardContent>
                       
            </Card>
        );
    }
}

export default Country;