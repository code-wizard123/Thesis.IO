import React, { useRef } from "react";
import { Button, Container, Form } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';

export default function Login({ onIdSubmit }){
    const idRef = useRef();

    function createNewId(){
        onIdSubmit(uuidv4());
    }

    function handleSubmit(e){
        e.preventDefault();
        onIdSubmit(idRef.current.value);
    }

    return(
        <Container className="align-items-center d-flex" style={{ height: "100vh" }}>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label>Enter Your Username</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit">Login</Button>
                <Button variant="secondary" onClick={createNewId}>Create New ID</Button>
            </Form>
        </Container>
    )
}