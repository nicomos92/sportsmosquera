import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailConteiner from './container/ItemDetailContainer'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <>
            <BrowserRouter>
                <NavbarComponent />
                <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/pokemon/:id" element={<ItemDetailConteiner  />} />
                </Routes>
            </BrowserRouter>
        </>

    </div>
    
  );
}

export default App;
