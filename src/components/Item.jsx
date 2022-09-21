import Card from 'react-bootstrap/Card';
import { Stack } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';

function ItemDetail({ pokemon, ...props }) {

    return (
        <>
            <br></br>
            <Card className="text-white" key="dark" bg="dark" border="secondary" style={{ 'outlineStyle': 'solid', 'outlineColor': 'red' }}>
                <Card.Img src={pokemon.sprites.other.dream_world.front_default} alt={""}
                    width={"100px"} height={"200px"} />
                <br/>
                <Card.Body>
                    <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
                    <Card.Text>
                        <Card.Text>
                            <Stack gap={2}>
                                <span>Podedex Id: {pokemon.id}</span>
                                <span>Tipo: {pokemon.types.length > 0 ? pokemon.types[0].type.name.toUpperCase() : ''}</span>
                                <span>Altura: {pokemon.height}</span>
                                <span>Peso: {pokemon.weight}</span>
                            </Stack>
                        </Card.Text>S
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail;