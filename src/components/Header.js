import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from '@mui/material/Button';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../Header.css';
import { Navigate, useNavigate } from "react-router-dom";


function Header(props){
    
    const navigate = useNavigate();

    const getAddPage = (event) => {
        event.preventDefault();
        navigate("/books/add")
    }

    useEffect(() => {
        props.getBooks();
    }, []);

    return (
        <div>
            <Navbar id="navbar">
                <Container>
                <Navbar.Brand href="/books">
                    <h4>B<AutoStoriesIcon fontSize='large'/>kClub</h4>
                </Navbar.Brand>
                <Nav.Link disabled id="disabled">
                    Have a book suggestion?
                </Nav.Link>
                <Button variant="contained" color='success' endIcon={<PlusOneIcon />} onClick={getAddPage}>
                    add
                </Button>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
