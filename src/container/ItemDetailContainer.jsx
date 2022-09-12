import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import ItemDetail from "../components/Item";


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
        <ItemDetail pokemon={pokemon}/>
        </Container> 
    )
}


export default ItemDetailConteiner;