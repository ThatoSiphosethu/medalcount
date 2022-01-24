import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Typography from '@mui/material/Typography';
import IndeterminateCheckBox from '@mui/icons-material/IndeterminateCheckBox';

class Country extends Component {
    state = {
        country: this.props.country.country,
        goldMedalCount: this.props.country.goldMedalCount
    }
   

    increament = () => {
        this.setState({
            goldMedalCount: this.state.goldMedalCount + 1
        });
    }

    decrease = () => {
        this.setState ({
            goldMedalCount: this.state.goldMedalCount - 1
        })
    }

    // decrease(){
    //     if(this.state.goldMedalCount === 0)
    //     {
    //        this.setState(prevState => ({goldMedalCount: prevState.goldMedalCount - 1 }))
    //     }
    //  }

    render() {
        console.log(this.props);
        return (
            <Card sx={{bgcolor: 'lightGray', minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                        <h3>Country : {this.state.country}  </h3>
                    </Typography>   
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Gold Medals : {this.state.goldMedalCount} 
                    </Typography>  
                    <AddBoxIcon size="small" onClick={this.increament} color='primary'></AddBoxIcon>
                    <IndeterminateCheckBox size="small" onClick={this.decrease} color='secondary'></IndeterminateCheckBox>     
                </CardContent>
                       
            </Card>
        );
    }
}

export default Country;