import React from "react";
import { Row } from "react-bootstrap";
import Movie from "./Movie";

function Gallery(props) {
  return (
    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6">
  
     {props.movies.map(movie=>(
        <Movie movie={movie}/>
        )) }
      
    </Row>
  );
}

export default Gallery;
