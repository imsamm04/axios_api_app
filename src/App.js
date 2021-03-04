import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import productApi from './api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const producList = await productApi.getAll(params);
      console.log(producList);
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>abc</p>
      </header>
    </div>
  );
}

export default App;
