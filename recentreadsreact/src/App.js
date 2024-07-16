import './App.css';
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BOOK_LIST = [
  {
    id: 1,
    title: "My Year of Meats",
    author: 1,
    genre: "Contemporary Fiction",
    status: "F",
    review: "Review",
    rating: 5
  },
  {
    id: 2,
    title: "Aliens and Whatnot",
    author: 2,
    genre: "Science Fiction",
    status: "F",
    review: "Aliens Review",
    rating: 4
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recent Reads</h1>
        <h5>Sarah Liu / <a href="mailto:sarah.liu.va@gmail.com">sarah.liu.va@gmail.com</a> / <a href="https://github.com/sarahyl/">Link to GitHub Repo</a></h5>
        <CurrentBookCard/>
      </header>
      <div className="cards">
      <div className="finishedbooks">
        <FinishedBooks/>  
        <FinishedBooks/>  
      </div>
      <div className="tobereadbooks">
        <ToBeReadBooks/>
      </div>
      </div>
    </div>
  );
}

// Card showing the information of the book I'm currently reading
function CurrentBookCard ({book}) {
  return (
    <div className="m-auto p-5 w-75 rounded border border-white shadow ">
      <h2>book title</h2>
      <p>By author</p>
      <p>genre</p>
      <p>blurb</p>
      <LearnMoreButton book={book}/>
    </div>
  );
}

// Section showing the books I've already read
function FinishedBooks() {
  return (
    <Container>
      <h2>Some Recent Reads</h2>
      <Row className="my-3">
      {BOOK_LIST.map((book) => (
        <Col xs="6">
          <BookCard book={book}/>
        </Col>
      ))}
      </Row>
    </Container>  
  );
}

// Section showing the books to be read
function ToBeReadBooks() {
  return (
    <Container className="my-5">
      <h2>To Be Read</h2>
      <Row>
      {BOOK_LIST.map((book) => (
        <Col xs="6">
          <BookCard book={book}/>
        </Col>
      ))}
      </Row>
    </Container>  
  );
}

// Card showing the information of a book
function BookCard({book}){  //border border-white border-4
  return (
    <div className="bookcard rounded shadow mx-auto my-3 p-3 w-100 h-100">
      <h2>{book.title}</h2>
      <h3>By {book.author}</h3>
      <p>{book.genre}</p>
      <p>{book.rating}/5 stars</p>
      <p>{book.review}</p>
      <LearnMoreButton book={book}/>
    </div>
  );
}

function LearnMoreButton({book}){
  return(
    <button href="https://github.com" className="btn btn-outline-primary">Learn More</button>
  );
}

export default App;