import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import pokemonTypeColors from "../components/PokemonTypeColors";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Stack} from "react-bootstrap";
import NavbarComponent from '../components/NavbarComponent';


const URL = "https://pokeapi.co/api/v2/pokemon/"

const ItemDetailConteiner = () => {

    const { id } = useParams()

    const [pokemon, setPokemon] = useState({})
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchData = (url) => {
        try{
            fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setIsLoaded(true);
                    setPokemon(data)
                })
        }catch (error){
            console.log('Error: ', error)
            setIsError(true);
        }

    }

    useEffect(() => {
        fetchData(URL + id + '/')
    }, [])


    if (isError){
        return (
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>ERROR</Card.Title>
                    </Card.Body>
                </Card>
                <br />
            </Container>

        );
    }

    if (!isLoaded) {
        // Spinner si no hay nada para mostrar
        return (
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>Cargando...</Card.Title>
                        <Spinner animation="border" role="status" />
                    </Card.Body>
                </Card>
                <br />
            </Container>

        );
    }
    return (
        <Container className={'mt-2'} style={{ margin: "2rem 0 5rem 0", overflowX: "hidden" }}>
            <Card className="bg-dark text-white">
                <Card.Header>{pokemon.name.toUpperCase()}</Card.Header>
                <Card.Body>

                    <Container>
                        <Row>
                            <Col>
                                <Image src={pokemon.sprites.other.dream_world.front_default} alt={""}
                                    width={"200px"} height={"200px"}
                                />

                            </Col>
                            <Col sm={2}>
                                Normal:
                                <Stack gap={3}>
                                    <div>
                                        <Image src={pokemon.sprites.front_default} alt={""}
                                            className={'rounded'}
                                            style={{'outline-style': 'solid', 'outline-color': 'white'}}
                                            width={"100px"} height={"100px"}
                                        />
                                    </div>
                                    <div>
                                        <Image src={pokemon.sprites.back_default}  alt={""}
                                            className={'rounded'}
                                            style={{'outline-style': 'solid', 'outline-color': 'white'}}
                                            width={"100px"} height={"100px"}
                                        />
                                    </div>

                                </Stack>


                            </Col>

                            <Col sm={2}>
                                Shiny:
                                <Stack gap={3}>
                                    <div>
                                        <Image src={pokemon.sprites.front_shiny} alt={""}
                                        className={'rounded'}
                                        style={{'outline-style': 'solid', 'outline-color': 'white'}}
                                        width={"100px"} height={"100px"}
                                        />
                                    </div>
                                    <div>
                                        <Image src={pokemon.sprites.back_shiny}  alt={""}
                                            className={'rounded'}
                                            style={{'outline-style': 'solid', 'outline-color': 'white'}}
                                            width={"100px"} height={"100px"}
                                        />
                                    </div>

                                </Stack>


                            </Col>

                            <Col className={'rounded pokemon-col'}>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    <Stack gap={3}>
                                        <div>Podedex Id: {pokemon.id}</div>
                                        <div>Nombre: {pokemon.name.toUpperCase()}</div>
                                        <div>Altura: {pokemon.height}</div>
                                        <div>Peso: {pokemon.weight}</div>
                                    </Stack>
                                </Card.Text>
                            </Col>
                        </Row>
                    </Container>

                </Card.Body>

                <Card.Footer >
                    <div className={'text-center'}>
                        {pokemon.types.map(p => {
                            let currentTypeColor = pokemonTypeColors[p.type.name]
                            console.log(p.type.name)
                            return (
                                <Button variant="outline-dark"
                                        style={{
                                            backgroundColor: currentTypeColor,
                                            color: "white",
                                            margin: "0 3px"
                                        }}
                                >
                                    {p.type.name}
                                </Button>
                            )
                        })}
                    </div>




                </Card.Footer>
            </Card>
            <br/>

        </Container>
    )
}


export default ItemDetailConteiner;