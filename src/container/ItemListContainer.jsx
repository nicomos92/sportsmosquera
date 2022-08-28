import Container from 'react-bootstrap/Container';
import ItemCountComponent from "../components/ItemCountComponent";
import Stack from 'react-bootstrap/Stack';


const ItemListContainer = ({ greeting,titulo }) => {
    return (
        <Container clasName="bg-light border">
            <h3 className="bg-light">{greeting}</h3>
            <br />
            <h2 className='bg-danger'>{titulo}</h2>
            <Stack direction="horizontal" gap={3}>
                <div className="bg-light  ms-auto"><ItemCountComponent stock={5} initial={0} titulo="Camiseta"/></div>
                <div className="bg-light  ms-auto"><ItemCountComponent stock={2} initial={0} titulo="Pelota"/> </div>
                <div className="bg-light  ms-auto"><ItemCountComponent stock={4} initial={0} titulo="Zapatilla"/> </div>
            </Stack>
        </Container>
    )
}

export default ItemListContainer;