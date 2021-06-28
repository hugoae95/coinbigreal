import axios from 'axios';
import { environment } from '../env';
import CoinI from '../interfaces/Coin.model';

// Service for consume Rest Api
class ItemsService  {
  // Service for get All items return data type array
   static getAll = async (headers = {}) => {
    const res = await axios.get(`${environment.api}tickers/`, { headers })
    .then((res) => {
      let items:CoinI[] = [];
      if(res.status === 200){
        items = res.data.data;
      }
      return items;
    })  
    .catch((e) => { });
    return res;
   }
   // Service for get one item return data type array with a item.
   static getOne = async (id:string, headers = {}) => {
    const res = await axios.get(`${environment.api}ticker/?id=${id}`, { headers })
    .then((res) => {
      let items:CoinI[] = [];
      if(res.status === 200){
        items = res.data;
      }
      return items;
    })  
    .catch((e) => { });
    return res;
   }
}

export default ItemsService;
