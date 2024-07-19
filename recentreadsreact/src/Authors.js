import './App.css';
import React from "react";
import axios from "axios";
import {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";

// base url of Django API
const API_BASE_URL = 'http://127.0.0.1:8000/api/';

//component that displays all of the books in the database using the API endpoint
//returns HTML of the author cards in two columns
export function AllAuthors() {
  const [allAuthors, setAllAuthors] = useState([])

  try{
      useEffect(() => {
          async function getAllAuthors() {
              const response = await axios.get(API_BASE_URL+"authors")
                  .then((response) =>  setAllAuthors(response.data))
          }  
          getAllAuthors()
      },[] )

  } catch(e) {
      console.error(e);
  }
  

  return(
      <Container>
          <Row className="mb-3">
              {allAuthors.map((author) => (
              <Col xs="6" className="my-3">
                  <AuthorCard author={author}/>
              </Col>
              ))}
          </Row>
      </Container> 
  );
}

// component that uses the API to retrieve the name of the author with a certain ID number
// return an <a> HTML tag with the author's name, linked to their GoodReads profile
export function AuthorName({id}){
  const [authorName, setAuthorName] = useState("")

  try{
      useEffect(() => {
          async function getAuthorName() {
              const response = await axios.get(API_BASE_URL+"authors/"+id)
                  .then((response) =>  setAuthorName(response.data))
          }  
          getAuthorName()
      },[] )

  } catch(e) {
      console.error(e);
  }

  return(
      <a href={authorName.goodreads_link}>{authorName.first_name} {authorName.last_name}</a>
  );

}

// Card showing the information of an author
// var author: the author displayed
function AuthorCard({author}){  //border border-white border-4
  return (
    <div className="card rounded shadow mx-auto  p-3 w-100 h-100">
      <AuthorName id={author.id}/>
    </div>
  );
}