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
  // const [searchInput, setSearchInput] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([])
  const [isSearching, setIsSearching] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    // setSearchInput(e.target.value);
    onSearchChange(event.target.value)
  }

  const onSearchChange = (sInput) => {
    if(sInput.length > 0){
      setIsSearching(true)  
      setFilteredBooks(books.filter((param) => {
        return param.title.toLowerCase().match(sInput.toLowerCase()) || param.author.toLowerCase().match(sInput.toLowerCase())
    }))}else{
      setIsSearching(false)
    }
  }

  const booksToDisplay = isSearching ? filteredBooks : books

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (searchInput.length > 0) {
  //     setBooks(books.filter((book) => { return book.title.toLowerCase().match(searchInput)}))
  //   } else if (searchInput.length === 0) { 
  //     return getBooks(); 
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
            {/* onSubmit={handleSubmit} */}
              <form className="search-form">
                <input className="search-input" type="text" placeholder="Search title here" onChange={handleChange}/>
                <button type="submit" className="search-button"><SearchIcon /></button>
              </form>
            </div>
            
            
            <Container fluid>
              <Row xs={2} sm={2} md={3} className="g-4">

              {booksToDisplay.length > 0 ?
                <>
                {booksToDisplay.map((book) => {
                  return <Book key={book.id} book={book} getBooks={getBooks} handleUpdate={handleUpdate}/> 
                })}
                </>
                :
                <>
                  <div className="nobooks">
                    <h2>No books found</h2>
                  </div>
                </>
              }

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


// {books.map((book) => {
//   return <Book key={book.id} book={book} getBooks={getBooks} handleUpdate={handleUpdate}/> 
// })}