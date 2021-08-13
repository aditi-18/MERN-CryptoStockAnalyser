import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

function Crypto1() {
  const [resp, setResp] = useState({
    columns: [
      {
        label: 'Open',
        field: '1. open',
      },
      {
        label: 'High',
        field: '2. high',
      },
      {
        label: 'Low',
        field: '3. low',
      },
      {
        label: 'Close',
        field: '4. close',
      },
      {
        label: 'Volume',
        field: '5. volume',
      },
    ],
  });


  useEffect(() => {
    if (resp) console.log(resp);
  }, [resp]);
  useEffect(() => {
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SHOP.TRT&outputsize=full&apikey=demo').then((response) => {
      setResp({ columns: resp.columns, rows: (Object.values(response.data['Time Series (Daily)'])).map(item => item) });
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div>
      <MDBDataTable striped bordered hover data={resp} searching={false} />
    </div>
  );
}

export default Crypto1;
