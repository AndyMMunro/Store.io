import React from "react";
import Thumbnail from "./Thumbnail";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cards.css';

export function ProductList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function ProductListItems({
  title,
  description,
  thumbnail,
  price
}) {
  return (
    <li className="list-group-item">
        <Container style={{paddingLeft: "5%", paddingRight:"5%"}}>
          <Row>
            <Col size="xs-3 sm-3">
              <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
            </Col>
            <Col size="xs-9 sm-9">
              <h3>{title}</h3>  
              <h3>{price}$</h3>
              <p>Description: {description}</p>
            </Col>
            <Button className='cards-btn' variant="dark">Add To Cart</Button>
          </Row>
        </Container>
    </li>

  );
}
