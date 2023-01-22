import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import '../Home.css';
import Card from 'react-bootstrap/Card';
import { MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Navigate, useNavigate } from "react-router-dom";

function Home(props) {

    const navigate = useNavigate();

    const getBookss = () => {
        props.getBooks()
        navigate("/books")

    }

    return (
        <div className="homepage">
            <nav className="navbar">
                <h4>B<AutoStoriesIcon fontSize='large'/>kClub</h4>
            </nav>

            <div className="home-content">
                <h2>EXPANDING HORIZONS</h2>
                <h2>THROUGH BOOKS</h2>
                <Button variant="light" onClick={getBookss}>Learn More <MDBIcon icon="search" /></Button>
            </div>

            <Card id='footer'>
                <Card.Header></Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <MDBContainer className='p-4 pb-0'>
                        <section className='mb-4'>
                            <MDBBtn outline color="light" floating className='m-1'  style={{ backgroundColor: '#dd4b39' }} href='#!' role='button'>
                                <MDBIcon fab icon='google' />
                            </MDBBtn>

                            <MDBBtn outline color="light" floating className='m-1' style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/rafaela-hollanda' role='button'>
                                <MDBIcon fab icon='linkedin' />
                            </MDBBtn>

                            <MDBBtn outline color="light" floating className='m-1' style={{ backgroundColor: '#333333' }} href='https://github.com/rphm95' role='button'>
                                <MDBIcon fab icon='github' />
                            </MDBBtn>
                        </section>
                    </MDBContainer>
                    <Card.Text>
                    BookClub is a full-stack web app developed with String/Java and React Native
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default Home;