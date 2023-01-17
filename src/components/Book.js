import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import EditIcon from '@mui/icons-material/Edit';
import Modal from "react-bootstrap/Modal";
import Edit from "./Edit.js";
import '../Book.css';


function Book (props) {
    const [showModal, setShowModal] = useState(false);
    // MODAL
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    // MODAL DESCRIPTION
    const [lgShow, setLgShow] = useState(false);

    // MODAL FOR EDIT
    const [show, setShow] = useState(false);
    const handleClose2 = () => setShow(false);
    const handleShow2 = () => setShow(true);

    const handleDelete = (event) =>{
        axios 
          .delete("http://localhost:8080/books/" + event.target.value) 
          .then((response) =>{
            props.getBooks()
          })
    }


    return (
        <div>
            <Col>
                <Card style={{ width: '15rem' }} id="card-book" border="light">
                    <Card.ImgOverlay>
                        <IconButton id="can-icon" onClick={handleShow} color='error'><DeleteIcon fontSize='large' id="try"/></IconButton>
                    </Card.ImgOverlay>
                    <Card.Img variant="top" src={props.book.image} />
                    <Card.Body>
                        <Card.Title>{props.book.title}</Card.Title>
                        <Card.Text>
                        <b>Author: </b>{props.book.author}<br/>
                        <b>Published: </b>{props.book.published}
                        </Card.Text>
                        <IconButton onClick={() => setLgShow(true)}><ReadMoreIcon/></IconButton>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                        <IconButton onClick={handleShow2}><EditIcon /></IconButton>
                        
                    </Card.Body>
                </Card>
            </Col>

            {/* modal for delete a book */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                    Are you sure you want to delete <i>{props.book.title}</i> book?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete} value={props.book.id} >
                    Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* modal for more details */}
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {props.book.title}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.book.description}</Modal.Body>
            </Modal>

            <Edit handleClose2={handleClose2} show={show} book={props.book} handleUpdate={props.handleUpdate}/>

        </div>
    )
}

export default Book;