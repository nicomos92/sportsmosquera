import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Spinner from 'react-bootstrap/Spinner';
import Container from "react-bootstrap/Container";
import Badge from 'react-bootstrap/Badge';


import pokemonTypeColors from "../../../data/pokemonTypeColors"

import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const URL = "https://pokeapi.co/api/v2/pokemon/"

const ItemComponent = ({ id }) => {

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
        <Container>
            <Card className="bg-dark text-white">
                <Card.Header>{pokemon.name.toUpperCase()} - ({pokemon.id})</Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Image src={pokemon.sprites.other.dream_world.front_default} alt={""}
                        width={"200px"} height={"200px"}
                    />

                </Card.Body>
                <Link to={'/pokemon/' +id }>
                    <Button variant="outline-success" className={'m-2'}>
                        <Image src={pokemon.sprites.front_default} alt={""}
                            width={"40px"} height={"40px"}
                        />
                        Ver detalle
                    </Button>
                </Link>
                <Card.Footer >
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

                </Card.Footer>
            </Card>
            <br/>

        </Container>
    )

}

export default ItemComponent;