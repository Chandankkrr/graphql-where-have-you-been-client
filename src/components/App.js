import React, { useState, useEffect } from 'react';
import fetchData from '../services/api';
import logo from '../logo.svg';
import './App.css';

function App() {
  const [data, updateData] = useState({greet: ''});
  const [loading, setLoading] = useState(true);

  async function getData() {
    const response = await fetchData();
    setLoading(false);
    updateData(response.data);
  }
  
  useEffect(() => {
    getData();
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
        {!loading && data.greet}
        </h1>
      </header>
    </div>
  );
}

export default App;
