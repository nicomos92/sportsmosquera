import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ItemListConteiner from './container/ItemListConteiner';
import ItemDetailConteiner from './container/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/cartContext'
import ContactForm from './components/ContactForm';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <>
        <CartProvider>
          <BrowserRouter>
            <NavbarComponent />
            <Routes>
              <Route path="/" element= {<ItemListConteiner />} />
              <Route path="/finalizarCompra" element={<ContactForm/>} />
              <Route path="/detalle/:id" element={<ItemDetailConteiner/>} />
            </Routes>
            <FooterComponent/>
          </BrowserRouter>

        </CartProvider>

      </>

    </div>

  );
}

export default App;
