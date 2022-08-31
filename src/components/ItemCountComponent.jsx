import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const ItemCountComponent = ({ stock, initial,titulo }) => {

  const [quantity, setQuantity] = useState(parseInt(initial));

  const addQuantity = () => {
    if (quantity + 1 <= stock) {
      setQuantity(quantity => quantity + 1);
    }
  };

  const subtractQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity => quantity - 1);
    }
  };

  const addCart = () =>{
    console.log("La cantidad a agregar es",quantity)

  }


  return (
    <Container>
      <h4>{titulo}</h4>  
      <h5>Stock: {stock} </h5>
      <ButtonGroup>
        <Button className="btn btn-primary px-3" onClick={subtractQuantity}>
          <i className="fas fa-minus">-</i>
        </Button>

        <input className={'text-center'} min={'0'} type={'number'} value={quantity} />

        <Button className="btn btn-primary px-3" onClick={addQuantity}>
          <i className="fas fa-plus">+</i>
        </Button>
      </ButtonGroup>
      <Container className='mt-1'>
        <Button variant="outline-primary" className={'px-3'} onClick={addCart}> Agregar al carrito </Button>
      </Container>
    </Container>
  );
}

export default ItemCountComponent;