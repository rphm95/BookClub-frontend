import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from 'react-bootstrap/Button';
import Button from '@mui/material/Button';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import IconButton from "@mui/material/IconButton";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../Header.css';
import { Navigate, useNavigate } from "react-router-dom";


function Header(props){

    // let emptyBook = { title: '', author: '', published: '', read: '', description: '', image: ''}
    // const [book, setBook] = useState(emptyBook)

    // const handleChange = (event) => {
    //     setBook({...book, [event.target.name]: event.target.value})
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     props.handleCreate(book)
    // }
    
    const navigate = useNavigate();

    const getAddPage = (event) => {
        event.preventDefault();
        navigate("/books/add")
    }

    return (
        <div>
            <Navbar id="navbar">
                <Container>
                <Navbar.Brand href="/books">
                    {/* <img
                    alt=""
                    src="https://freesvg.org/img/Buecher-coloured.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '} */}
                    <h4>B<AutoStoriesIcon fontSize='large'/>kClub</h4>
                </Navbar.Brand>
                <Nav.Link disabled id="disabled">
                    Have a book suggestion?
                </Nav.Link>
                <Button variant="contained" color='success' endIcon={<PlusOneIcon />} onClick={getAddPage}>
                    add
                </Button>
                {/* <Button onClick={getAddPage}>Add Here</Button> */}
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
