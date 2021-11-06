import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating"

const Product = ({ product }) => {
  return (
    <Card className="p-3 my-3 rounded">
      <Card.Link href={`/products/${product.id}`}>
        <Card.Img variant="top" src={`/uploads/${product.productImages[0]}`} />
      </Card.Link>
      <Card.Body className="text-center">
        <Card.Link
          className="link-dark remove-underline"
          href={`/products/${product.id}`}
        >
          <Card.Title as="div">
            <strong>{product.name}</strong>{" "}
          </Card.Title>
        </Card.Link>
        <Card.Text as="div" className = "my-2">
          <Rating value = {product.rating} numReviews = {product.numOfReviews}></Rating>
        </Card.Text>
        <Card.Text as="h2">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
