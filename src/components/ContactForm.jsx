import React, { useState } from 'react';
import { getFirestore, addDoc, collection} from 'firebase/firestore';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { CartContext } from '../context/cartContext'
import { useContext } from 'react';


const ContactForm = () => {
  const [id, setId] = useState();

  const { cart, clearItems, total} = useContext(CartContext);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const changeHandler = (event) => {
    const newForm = { ...form, [event.target.name]: event.target.value };
    setForm(newForm);
  };

  const buildOrder = (form, cart, total) => {
    const buyer = {
      name: form.name,
      email: form.email,
      phone: form.phone
    }

    let items= [];
    cart.forEach(function (item) {
      items.push(item);
    });
   
    const order = {
      buyer: buyer,
      items: items,
      total: total()
    }
   
    return order;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const db = getFirestore();
    const contactFormCollection = collection(db, 'orders');
    addDoc(contactFormCollection, buildOrder(form, cart, total)).then((snapshot) => setId(snapshot.id));
    clearItems()
  };

  return (
    
      <div>
        {typeof id !== 'undefined' ? (
          <Container style={{ display: 'block', 
          width: 600, 
          padding: 30 }}>
            <div className="alert alert-success text-center" role="alert">
              <span>Su Nro. de pedido es:  {id}</span>
              <br /><br />
              <strong>Gracias por su compra {form.name}!!! </strong>
            </div>
          </Container>
        ) : (
          <>
            <Container style={{ display: 'block', 
                  width: 600, 
                  padding: 40 }}>
              <Form className="bg-muted text-light" onSubmit={submitHandler}>
                <Form.Group id="form.Name">
                  <Form.Label> Nombre </Form.Label>
                  <Form.Control  type="text" name="name" id="name" onChange={changeHandler}
                    value={form.name} placeholder="Ingrese su nombre" />
                </Form.Group>
                <br />
                <Form.Group id="form.Email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control  type="email" name="email"
                    id="email" onChange={changeHandler}
                    value={form.email} placeholder="name@example.com" />
                </Form.Group>
                <br />
                <Form.Group id="form.phone">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control type="number" name="phone"
                    id="phone"
                    onChange={changeHandler}
                    value={form.phone} placeholder="Ingrese su teléfono"/>
                </Form.Group>
                <br />
                <Form.Group className="justify-content-center" >
                  <Button variant="primary" type="submit">
                    Confirmar compra
                  </Button>
                </Form.Group>
              </Form>
            </Container>
          </>
        )}
      </div>
    
  );
};

export default ContactForm;