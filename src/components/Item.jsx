import Card from 'react-bootstrap/Card';
import { Stack } from 'react-bootstrap';

function ItemDetail ({pokemon, ...props}) {

    return (
        <>
            <Card style={{ width: '18rem' }} className="text-white" key="dark" bg="dark" border="secondary">
                <Card.Img src={pokemon.sprites.back_shiny}  alt={""}
                                            className={'rounded'}
                                            style={{'outline-style': 'solid', 'outline-color': 'white'}}
                                            width={"100px"} height={"100px"} />
                <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <Card.Text>
                    <Card.Text>
                            <Stack gap={3}>
                                <div>Podedex Id: {pokemon.id}</div>
                                <div>Nombre: {pokemon.name.toUpperCase()}</div>
                                <div>Altura: {pokemon.height}</div>
                                <div>Peso: {pokemon.weight}</div>
                            </Stack>
                    </Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>

    )

}

export default ItemDetail;