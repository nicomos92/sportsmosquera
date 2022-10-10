import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Container from "react-bootstrap/Container";
import ItemCountComponent from './ItemCountComponent';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'


const ItemComponente = ({title, thumbnail, currency_id, price, id, stock}) => {
    
    const { addItem } = useContext(CartContext);

    const handlerAddItem = (quantity) => {
        const item = {title, id, quantity, price};
        addItem(item);
    }

    return (
        <Container>
            <Card className="bg-dark d-block text-center">
                <Card.Header className="bg-dark text-white">
                    <Card.Title>{title}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Image className="img-fluid d-block mx-auto" src={thumbnail} alt={""} width={"100px"} height={"100px"} />
                    <h5>$ {price}</h5>
                    <Link to={`/detalle/${id}`}><Button className="btn btn-danger px-5">Ver detalles</Button></Link>
                </Card.Body>
                <Card.Footer className="bg-dark text-white">
                    <ItemCountComponent stock={stock} initial={1} handlerAddItem={handlerAddItem}/>
                </Card.Footer>
            </Card>
            <br />
            <br />
        </Container>
    )
}

export default ItemComponente;