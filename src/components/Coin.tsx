import { Paper, Grid, Button } from '@material-ui/core';
import CoinI from '../interfaces/Coin.model';
import { Link } from 'react-router-dom';
import useStyles from './styles/style';
 
interface CoinProps {
    coin: CoinI;
}

const Coin = (props: CoinProps) => {
    const classes = useStyles();
    const { id, name, price_usd } = props.coin;
    return (
        <Grid item xs={12} sm={3}>
            <Paper className={classes.paper} >
                 <h4>{name}</h4>
                 <p>{price_usd} usd</p>
                 <Button size="small"><Link to={`/items/${id}`}>View More</Link></Button>
            </Paper>
        </Grid>
    )
}

export default Coin;