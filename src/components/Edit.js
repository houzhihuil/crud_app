import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import produits from './produits';
import { Link, useNavigate } from 'react-router-dom';

function Edit() {
    const [description, setDescription] = useState('');
    const [prix, setPrix] = useState('');
    const [id, setid] = useState('');

    let history = useNavigate();

    // Parse the ID from local storage to an integer
    const parsedId = parseInt(id);

    // Get the index of the product with the parsed ID
    const index = produits.findIndex(product => product.id === parsedId);

    const handelSubmit = (e) => {
        e.preventDefault();

        // Update the product's description and prix
        produits[index].description = description;
        produits[index].prix = prix;

        // Redirect back to the main page
        history('/');
    }

    useEffect(() => {
        setDescription(localStorage.getItem('description'));
        setPrix(localStorage.getItem('prix'));
        setid(localStorage.getItem('id'));
    }, []);

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        type="text"
                        placeholder="Enter Description"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        value={prix}
                        onChange={e => setPrix(e.target.value)}
                        type="text"
                        placeholder="Prix"
                    />
                </Form.Group>
                <Button
                    onClick={e => handelSubmit(e)}
                    variant="primary"
                    type="submit"
                    size="lg"
                >
                    Update
                </Button>
                <Link className="d-grid gap-2" to="/">
                    <Button variant="warning" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Edit;
