import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import { Col, Row, ListGroup, Button } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import Rating from "./Rating";
import Loading from "./Loading";
import Error from "./Error";
import { listProductsDetails } from "../actions/productActions";



const ProductHome = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const { id } = useParams();
  const history = useHistory()
  let images = [];
  if (product && product.productImages && product.productImages.length > 1) {
    product.productImages.map((item) => {
      return images.push({
        original: `/uploads/${item}`,
        thumbnail: `/uploads/${item}`,
      });
    });
  }

  const addToCart = () => {
      history.push(`/cart/${id}?qty=1`)
  }

  useEffect(() => {
    dispatch(listProductsDetails(id));
  }, [dispatch, id]);
  return (
    <div>
      <Link className="btn btn-dark m-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error variant="danger">{error}</Error>
      ) : (
        <Row>
          <Col md={6}>
            <ImageGallery items={images} />
          </Col>

          <Col md={3}>
            <ListGroup className="border-0 text-center" variant="flush">
              <ListGroup.Item>
                {" "}
                <h1>{product.name}</h1>{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  numReviews={product.numOfReviews}
                ></Rating>
              </ListGroup.Item>
              <ListGroup.Item>${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <ListGroup className="text-center">
              <Row>
                <Col className="row">
                  <ListGroup.Item>Price:</ListGroup.Item>
                </Col>
                <Col className="row">
                  <ListGroup.Item>${product.price}</ListGroup.Item>
                </Col>
              </Row>
              <Row>
                <Col className="row">
                  <ListGroup.Item>Status:</ListGroup.Item>
                </Col>
                <Col className="row">
                  <ListGroup.Item>
                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                  </ListGroup.Item>
                </Col>
              </Row>
              <Button type="button" onClick={addToCart}>Add to Cart</Button>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductHome;
