import Card from 'react-bootstrap/Card';
import { Stack } from 'react-bootstrap';

function ItemDetail({ pokemon, ...props }) {

    return (
        <>
            <Card style={{ width: '18rem' }} className="text-white" key="dark" bg="dark" border="secondary">
                <Card.Img src={pokemon.sprites.back_shiny} alt={""}
                    className={'rounded'}
                    style={{ 'outlineStyle': 'solid', 'outlineColor': 'white' }}
                    width={"100px"} height={"100px"} />
                <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <Card.Text>
                        <Card.Text>
                            <Stack gap={3}>
                                <span>Podedex Id: {pokemon.id}</span>
                                <span>Nombre: {pokemon.name.toUpperCase()}</span>
                                <span>Altura: {pokemon.height}</span>
                                <span>Peso: {pokemon.weight}</span>
                            </Stack>
                        </Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail;