interface CoinI {
    id:string;
    name:string;
    symbol:string;
    rank:number;
    percent_change_24h:string;
    percent_change_1h:string;
    percent_change_7d:string;
    volume24:number;
    volume24_native:number;
    price_usd:string;
}
export default CoinI;