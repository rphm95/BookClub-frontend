import React, {useState, useEffect} from 'react';
import Modal from "react-bootstrap/Modal";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Edit(props) {

    const [book, setBook] = useState({...props.book});

    const handleChange = (event) => {
        setBook({...book, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleUpdate(book);
    };
    
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose2}>
                <Modal.Header closeButton>
                <Modal.Title>Edit {props.book.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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

                    <Button variant="primary" type="submit" id="add-btn" onClick={props.handleClose2}>
                        Submit Changes
                    </Button>
                </Form>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose2}>
                    Close
                </Button>
                {/* <Button variant="primary" type="submit" onClick={props.handleClose2}>
                    Save Changes
                </Button> */}
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Edit;