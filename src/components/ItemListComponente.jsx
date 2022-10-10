import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemComponente from './ItemComponente';

function ItemListComponente({ items, ...props }) {
    return (
        <Container>
            <Row>
                {items.map((item, idx) => {
                    return (
                        <Col key={idx} sm={3}>
                            <ItemComponente title={item.description} thumbnail={item.thumbnail} price={item.price} id={item.id} key={idx} stock = {item.stock} />
                        </Col>
                    )
                })}
            </Row>
            <br />
        </Container>
    )
}

export default ItemListComponente;