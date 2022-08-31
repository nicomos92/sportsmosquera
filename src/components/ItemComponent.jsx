import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Spinner from 'react-bootstrap/Spinner';
import Container from "react-bootstrap/Container";

import {useEffect, useState} from "react";


const ItemComponent = ({ item }) => {

    const [pokemon, setPokemon] = useState({})

    const fetchData = (url) => {
        try{
            fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setPokemon(data)
                })
        }catch (error){
            console.log('Error: ', error)
        }

    }

    useEffect(() => {
        fetchData(item.url)
    }, [])


    if (Object.entries(pokemon).length === 0) {
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
                <Button variant="outline-success" className={'m-2'}>
                    <Image src={pokemon.sprites.front_default} alt={""}
                        width={"40px"} height={"40px"}
                    />
                    Ver detalle
                </Button>
                <Card.Footer >
                    {pokemon.types.length > 0 ? pokemon.types[0].type.name.toUpperCase() : ''}
                </Card.Footer>
            </Card>
            <br/>

        </Container>
    )

}

export default ItemComponent;