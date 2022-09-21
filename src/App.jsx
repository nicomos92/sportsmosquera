import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailConteiner from './container/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from './context/cartContext'

function App() {
  return (
    <div className="App">
      <>
        <CartProvider >
          <BrowserRouter>
            <NavbarComponent />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/pokemon/:id" element={<ItemDetailConteiner />} />
              <Route path="/types/:type" element={<ItemDetailConteiner />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>

      </>

    </div>

  );
}

export default App;
