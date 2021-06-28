import React, { Component } from 'react';
import { Grid,  Container, TextField } from '@material-ui/core';

import ItemsService from '../services/ItemsService';
import CoinI from '../interfaces/Coin.model';
import Coin from './../components/Coin';

class Home extends Component {
    state = {
        search: '',
        coins: []
    }
    async componentDidMount() {
        try{    
          const coins = await ItemsService.getAll();
          this.setState({ coins });
        }catch(e){
            console.log(e);
        }
    }
    // Change event input receive event target and create a new state of search
    handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = e.currentTarget.value;
        this.setState({ search });
    }
    render() {
        return (
            <Container maxWidth="lg">

                <TextField
                    onChange={this.handleOnChange}
                    id="outlined-full-width"
                    label="Search"
                    style={{ margin: 8 }}
                    placeholder=""
                    helperText=""
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />

                <Grid container spacing={3}>   
                    { this.state.coins.filter((coin:CoinI) => { return coin.name.toLowerCase().includes(this.state.search.toLowerCase()) } ).map((coin:CoinI, index) => {
                        return (
                            <Coin key={index} coin={coin} />
                        )
                    }
                )}
                </Grid>                
            </Container>
        )
    }
}

export default Home;
