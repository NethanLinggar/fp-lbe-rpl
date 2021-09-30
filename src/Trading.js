import React, {useState, useEffect} from 'react';
import './App.css';

function Trading() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://api.cryptonator.com/api/full/btc-usd")
      .then((respons) => respons.json())
      .then((data) => setUser(data));
  }, []);
  console.log(user);

  return (
    <div className="trading">
      <br />
      Base : {user && user.ticker && user.ticker.base}
      <br />
      <br />
      Target : {user && user.ticker && user.ticker.target}
      <br />
      <br />
      Price : {user && user.ticker && user.ticker.price}
      <br />
      <br />
      Volume : {user && user.ticker && user.ticker.volume}
      <br />
      <br />
      Change : {user && user.ticker && user.ticker.change}
      <br />
      <br />
      Change : {user && user.timestamp}
      <br />
      <br />
      Success : {user && user.success}
      <br />
      <br />
      Error : {user && user.error}
    </div>
  );
}

export default Trading;