import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import CartPage from './components/CartPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
