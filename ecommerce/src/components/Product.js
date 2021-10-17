import React from "react";
import { Card } from "react-bootstrap";
import DisplayImages from "./DisplayImages";

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
            {" "}
            <strong>{product.name}</strong>{" "}
          </Card.Title>
        </Card.Link>
        <Card.Text as="div">
          {product.rating} from {product.numOfReviews}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
