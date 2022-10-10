import ItemDetailComponent from '../components/ItemDetailComponent';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from "firebase/firestore";


const ItemDetailConteiner = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();

    console.log(id);
    const getItem = () => {
        try {
            const db = getFirestore();
            const itemBD = doc(db, "products", id);
            getDoc(itemBD).then((snapshot) => {
                if (snapshot.exists()) {
                    setItem({id: snapshot.id, ...snapshot.data()});
                }
            });
        } catch (e) {
            console.log(e);
        }            
    }
    console.log("AAAAAAAAAAAAAAAAA",{id});

    useEffect(() => {
        getItem();
    }, [])

    return (
       <ItemDetailComponent item={item} />
    )
}

export default ItemDetailConteiner;