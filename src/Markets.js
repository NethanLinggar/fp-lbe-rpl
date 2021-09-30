import React, {useState, useEffect} from 'react';
import './App.css';

function Markets() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://api.cryptonator.com/api/full/btc-usd")
      .then((respons) => respons.json())
      .then((data) => setUser(data));
  }, []);
  console.log(user);

  return (
    <div className="marketsmal">
      <h3>Market</h3>
      {user &&
        user.ticker &&
        user.ticker.markets &&
        user.ticker.markets.map((item) => {
          return <p> {item.market} </p>;
        })}
          <br />
      <h3>Price</h3>
      {user &&
        user.ticker &&
        user.ticker.markets &&
        user.ticker.markets.map((item) => {
          return <p> {item.price} </p>;
        })}
          <br />
      <h3>Volume</h3>
      {user &&
        user.ticker &&
        user.ticker.markets &&
        user.ticker.markets.map((item) => {
          return <p> {item.volume} </p>;
        })}
    </div>
  );
}

export default Markets;