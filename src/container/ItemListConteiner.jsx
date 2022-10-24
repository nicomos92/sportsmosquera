import ItemListComponente from '../components/ItemListComponente';
import { useState, useEffect } from 'react';
import { getFirestore, getDocs, collection,query,where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListConteiner = () => {
    const [items, setItems] = useState([])
    let { idCategoria } = useParams();
    const getItems = () => {
        try {
            const db = getFirestore();
            const itemDB = query(collection(db, "products"));
            const result = idCategoria
              ? query(itemDB, where("categoryid", "==",idCategoria))
              : itemDB;
            getDocs(result).then((snapshot) => {
                const docs = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    }));
                    setItems(docs);
                });
        } catch (e) {
            console.log(e);
        }
    }
    
    useEffect(() => {
        getItems();
    },  [idCategoria])

    return (
        <ItemListComponente items={items} />
    )
}

export default ItemListConteiner;