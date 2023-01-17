import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Book from './components/Book.js';
import Footer from './components/Footer.js';
import Add from './components/Add.js';
import BookDetail from './components/BookDetail'; 
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreate = (addBook) =>{
    axios 
      .post("https://bookclub1.herokuapp.com/books", addBook)
      .then((response) =>{
        console.log(response)
        getBooks()
      })
  }
  const handleUpdate = (editBook) => {
    axios 
      .put("https://bookclub1.herokuapp.com/books/" + editBook.id, editBook)
      .then((response) => {
        getBooks()
      })
  }
  const getBooks = () => {
    axios
      .get("https://bookclub1.herokuapp.com/books")
      .then((response) => setBooks(response.data), 
      (err) => console.log(err))
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/books/add" element={<><Header /> <Add handleCreate={handleCreate}/></>}></Route>
          
          {/* <Route path="/books/details" element={<><Header /> <BookDetail key={books.id} book={books}/> <Footer /></>}></Route> */}
          <Route path="/books" element={<><Header /> 
            <Container fluid>
              <Row xs={2} md={3} className="g-4">
              {books.map((book) => {
                return <Book key={book.id} book={book} getBooks={getBooks} handleUpdate={handleUpdate}/> 
              })}
              </Row>
            </Container>
            <Footer /></>}>
          </Route>
          
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
