import React, { useEffect, useState } from "react";
import { Container, Button, Modal, Form, Table, FormLabel, FormControl, FormGroup } from 'react-bootstrap';



const Clientes = () => {
    //funções e variáveis

    const [showModal, setShowModal] = useState(false);

    const [clientes, setClientes] = useState([
        {id: 1, name: 'nome1', email: 'nome1@gmail.com'}
    ])

    const [newClientName, setNewClientName] = useState(' ')
    const [newClientEmail, setNewClientEmail] = useState(' ')

    const handleModal = () => {
        setShowModal(!showModal);
    }
    const handleClose = () => {
        setShowModal(false);
    }
    const handleSave = (e) =>{
        e.preventDefault();
        console.log("oi")
        const newClient = {
            id: clientes.length + 1,
            name: newClientName,
            email: newClientEmail
        }
        setClientes([...clientes, newClient]);
        handleClose();
        setNewClientName(' ');
        setNewClientEmail(' ');
    }

    return (
        <Container>
            <h1>
                Lista de Clientes
            </h1>
            <Button variant='primary' onClick={handleModal}>
                Cadastrar novo cliente
            </Button>



            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Cadastro de novo cliente
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSave}>
                    <FormGroup controlId="formBasicName">
                        <FormLabel>
                            Nome
                        </FormLabel>
                        <FormControl type='text' 
                            placeholder='Digite o nome do cliente' 
                            onChange={(e) => setNewClientName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicEmail">
                        <FormLabel>
                            Email
                        </FormLabel>
                        <FormControl type='text' 
                            placeholder='Digite o email do cliente' 
                            onChange={(e) => setNewClientEmail(e.target.value)}
                        />
                    </FormGroup>

                    <Button variant='primary' type='submit'>
                        Salvar
                    </Button>
                </Form>
            </Modal>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((client) => (
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default Clientes;