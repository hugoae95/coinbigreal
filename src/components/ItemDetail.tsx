import React from 'react';
import { Paper, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import ItemsService from '../services/ItemsService';
import CoinM from '../models/CoinM';
 
interface ItemDetailProps {
    params: any;
}

class ItemDetail extends React.Component<ItemDetailProps>{
    state = {
        coin: new CoinM(),
    }
    async componentDidMount() {
        try{
          const coin = await ItemsService.getOne(this.props.params.id);
          if(coin && coin.length > 0){
            this.setState({ coin: coin[0] });
          }
        }catch(e){
            console.log(e);
        }
    }
    render() {
        return (
            <Container maxWidth="lg">
                <Button size="small"><Link to={`/`}>Back</Link></Button>
                <Grid item xs={12}>
                    <Paper className='MuiPaper-root makeStyles-paper-6 MuiPaper-elevation1 MuiPaper-rounded'>
                        <h4>{this.state.coin.name}</h4>
                        <p>Price Usd: {this.state.coin.price_usd} usd</p>
                        <p>Symbol: {this.state.coin.symbol} usd</p>
                        <p>Percent Change 24h: {this.state.coin.percent_change_24h}</p>
                        <p>Percent Change 1h: {this.state.coin.percent_change_1h}</p>
                        <p>Percent Change 7d: {this.state.coin.percent_change_7d}</p>
                        <p>Volume 24: {this.state.coin.volume24}</p>
                        <p>Volume 24 native: {this.state.coin.volume24_native}</p>
                    </Paper>
                </Grid>
            </Container>
        )
    }
}

export default ItemDetail;