import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const ItemCountComponent = ({ stock, initial, onAdd }) => {

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


  return (
    <Container>
      <h5>Stock: {stock} </h5>
      <ButtonGroup>
        <Button className="btn btn-danger px-3" onClick={subtractQuantity}>
          <i className="fas fa-minus">-</i>
        </Button>

        <input className={'text-center'} min={'0'} type={'number'} value={quantity} />

        <Button className="btn btn-danger px-3" onClick={addQuantity}>
          <i className="fas fa-plus">+</i>
        </Button>
      </ButtonGroup>
      <Container className='mt-1'>

        {/* TOCAMOS ACA */}
        <Button variant="outline-danger" className={'px-3'} 
        onClick={
          () => {onAdd(quantity)}
          }> Agregar al carrito </Button>
        {/* TOCAMOS ACA */}

      </Container>
    </Container>
  );
}

export default ItemCountComponent;