import ItemListComponente from '../components/ItemListComponente';
import { useState, useEffect } from 'react';
import { getFirestore, getDocs, collection } from "firebase/firestore";


const ItemListConteiner = () => {
    const [items, setItems] = useState([])

    const getItems = () => {
        try {
            const db = getFirestore();
            const itemDB = collection(db, "products");
            getDocs(itemDB).then((snapshot) => {
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
    }, [])

    return (
        <ItemListComponente items={items} />
    )
}

export default ItemListConteiner;