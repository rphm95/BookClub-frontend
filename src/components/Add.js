import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../Add.css';
import { useNavigate } from "react-router-dom";

function Add(props){
    let emptyBook = { title: '', author: '', published: '', read: '', description: '', image: ''}
    const [book, setBook] = useState(emptyBook)

    const navigate = useNavigate();

    const handleChange = (event) => {
        setBook({...book, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(book)
        navigate("/books")
    }

    return (
        <div>
            <h1>Let us know your suggestion:</h1>
            {/* <div className="container"> */}
            <Container fluid>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter Title of the Book" 
                        name="title" 
                        value={book.title}
                        onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Author's Name"
                        name="author"
                        value={book.author}
                        onChange={handleChange} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Published:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Month date, year" 
                        name="published"
                        value={book.published}
                        onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control 
                        as="textarea"
                        rows={3}
                        placeholder="Enter description of the book"
                        name="description"
                        value={book.description}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Book Cover:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Paste URL" 
                        name="image"
                        value={book.image}
                        onChange={handleChange}/>
                </Form.Group>

                {/* <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check 
                        type="checkbox" name="read" value={book.read} onChange={handleChange} label="Check if you've read the book already" />
                </Form.Group> */}

                <Button variant="primary" type="submit" id="add-btn">
                    Submit
                </Button>
                
            </Form>
            </Container>
            {/* </div> */}
        </div>
    ) 
}

export default Add;