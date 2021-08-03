import React, { useState, useEffect } from 'react';
import axios from 'axios';
//require('./style.css');
//import './App.css';
import Coin from './Coin.js';
import ReactPaginate from 'react-paginate';

 function Crypto() {
    const [coins, setCoins] = useState([]);
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [search, setSearch] = useState('');
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0)


    const getData = async() => {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=25&sparkline=false`).then (res => {
            setCoins(res.data); })
        const data = res.data;
        const slice = data.slice(offset, offset + perPage)
                const postData = slice.map(pd => <div key={pd.id}>
                    <p>{pd.title}</p>
                    <img src={pd.thumbnailUrl} alt=""/>
                </div>)
                setData(postData)
                setPageCount(Math.ceil(25))
  }




    useEffect(() => {
      getData()}, [offset])
  
    const handleChange = e => {
      setSearch(e.target.value);
      
    };
    const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
    };

  
    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
        
      <div className='coin-app'>
        <div className='coin-search'>
          <h1 className='coin-text'>Search a currency</h1>
          <form>
            <input
              className='coin-input'
              type='text'
              onChange={handleChange}
              placeholder='Search'
            />
          </form>
          
        </div>
        <div className="header">
            Symbol   Coin   Price    Volume    %change    Market Cap
          </div>
        {filteredCoins.map(coin => {
          return (
           
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
        {data}
        <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
    
      </div>
      
    );
  }
  export default Crypto;