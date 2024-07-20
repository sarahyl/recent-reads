import './App.css';
import React from "react";
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {AuthorName} from './Authors';

// base url of Django API
const API_BASE_URL = 'http://54.82.248.138:8000/api/';

//component that displays all of the books in the database using the API endpoint
//returns HTML of the book cards in two columns
export function AllBooks() {

    const [allBooks, setAllBooks] = useState([])

    try{
        useEffect(() => {
            async function getAllBooks() {
                const response = await axios.get(API_BASE_URL+"books")
                    .then((response) =>  setAllBooks(response.data))
            }  
            getAllBooks()
        },[] )

    } catch(e) {
        console.error(e);
    }
    
    return(
        <Container>
            <Row className="mb-3">
                {allBooks.map((book) => (
                <Col xs="6" className="my-3">
                    <BookCard book={book}/>
                </Col>
                ))}
            </Row>
        </Container> 
    );
        
}

// Card showing the information of a book
// var book: the book being displayed
function BookCard({book}){  //border border-white border-4
    return (
      <div className="card rounded shadow mx-auto my-auto py-3 px-5 w-100 h-100">
        <h2>{book.title}</h2>
        <h4>By <AuthorName id={book.author}/></h4>
        <Container>
          <Row>
            <Col>
              <BookCardCoverImage book={book}/>
            </Col>
            <Col className="my-auto">
              <p>{book.genre}</p>
              <p>
                {/* if book rating exists then display rating. otherwise display currently reading */}
                { book.rating && <>{book.rating}/5 stars</>}
                { !book.rating && <>Currently Reading</>}
              </p>
              <LearnMoreButton link={book.goodreads_link}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
//image of the book's cover on its card
function BookCardCoverImage({book}){
    return(
      <img src={book.cover} className="bookcardcoverimage border border-light border-3 shadow-sm m-3"></img>
    );
}
  
//button that takes the user to the GoodReads page of the book
function LearnMoreButton({link}){
    return(
      <a href={link} className="btn btn-lg btn-outline-primary mx-auto">Learn More</a>
    );
}