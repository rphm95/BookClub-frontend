import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Book from './components/Book.js';
import Footer from './components/Footer.js';
import SearchIcon from '@mui/icons-material/Search';
import Add from './components/Add.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [books, setBooks] = useState([]);

  //  SEARCH BAR
  const [searchInput, setSearchInput] = useState("");
  // const [filteredBooks, setFilteredBooks] = useState([])
  // const [isSearching, setIsSearching] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.length > 0) {
      setBooks(books.filter((book) => { return book.title.toLowerCase().match(searchInput)}))
    } else if (searchInput.length === 0) { 
      return getBooks(); 
    }
  }

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value)
  //   onSearchChange(e.target.value)
  // }

  // const onSearchChange = (searchInput) => {
  //   const searchInputLower = searchInput.toLowerCase()
  //   if (searchInput.length > 0){
  //     setIsSearching(true)
  //     const result = books.filter((book) => {
  //       return book.title.toLowerCase().match(searchInputLower)
  //     })
  //     setFilteredBooks(result)
  //   } else {
  //     setIsSearching(false)
  //   }
  // }

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

        <Routes>
          <Route path="/" element={<Home getBooks={getBooks}/>}/>

          <Route path="/books" element={<>
            
            <Header getBooks={getBooks} /> 
            
            <div className="search-container">
              <form className="search-form" onSubmit={handleSubmit}>
                <input className="search-input" type="text" placeholder="Search title here" onChange={handleChange} value={searchInput}/>
                <button type="submit" className="search-button"><SearchIcon /></button>
              </form>
            </div>
            
            
            <Container fluid>
              <Row xs={2} sm={2} md={3} className="g-4">
              {books.map((book) => {
                return <Book key={book.id} book={book} getBooks={getBooks} handleUpdate={handleUpdate}/> 
              })}
              </Row>
            </Container>

            <Footer /></>}
          />

          <Route path="/books/add" element={<><Header getBooks={getBooks} /> <Add handleCreate={handleCreate} getBooks={getBooks}/></>}/>
          
         
          
        </Routes>
 
    </Router>
  );
}

export default App;
