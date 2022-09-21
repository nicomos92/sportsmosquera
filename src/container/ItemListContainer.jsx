import { useEffect, useState } from "react"
import Container from 'react-bootstrap/Container';
import ItemComponent from "../components/ItemComponent";
import ItemCountComponent from "../components/ItemCountComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const ItemListContainer = () => {
    const [pokemons, setPokemons] = useState({})

    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setPokemons(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <Container>
            <br/>
            <Row>
                { Object.entries(pokemons).length !== 0 &&
                    (
                        pokemons.results.map( ( pokemon, idx ) => (
                            <Col key={idx} sm={4}>
                                <ItemComponent item={pokemon} />
                            </Col>
                            )
                        )
                    )
                }
            </Row>

            <br />
        </Container>
    )
}

export default ItemListContainer;