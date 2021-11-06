import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useLocation, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAction,
  removeFromCartAction,
} from "../actions/addCartActions";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Error from "./Error";
import { QuantityPicker } from "react-qty-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const exists = cartItems.find((x) => x.product === id);
  const qty = exists ? exists.qty : location.search.split("=")[1];

  useEffect(() => {
    if (id) {
      dispatch(addToCartAction(id, qty));
    }
  }, [dispatch, qty, id]);

  const RemoveFromCart = (id) => {
    dispatch(removeFromCartAction(id));
  };

  const checkout = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Error>Nothing in Cart!</Error>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => {
              return (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src={`/uploads/${item.image}`}
                        alt={item.name}
                        fluid
                        rounded
                      ></Image>
                    </Col>
                    <Col md={3} className="align-self-center">
                      <h3>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/products/${item.product}`}
                        >
                          {item.name}
                        </Link>{" "}
                      </h3>
                    </Col>
                    <Col md={2} className="align-self-center">
                      <h3>${item.price} </h3>
                    </Col>
                    <Col md={3} className="align-self-center">
                      <QuantityPicker
                        width="9rem"
                        value={item.qty}
                        min={1}
                        max={item.stock}
                        smooth
                        onChange={(value) => {
                          dispatch(addToCartAction(item.product, value));
                        }}
                      />
                    </Col>
                    <Col md={2} className="align-self-center">
                      <Button
                        variant="light"
                        onClick={() => RemoveFromCart(item.product)}
                      >
                        <FontAwesomeIcon icon="trash" size="3x" />{" "}
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </Col>
      <Col md={4} className="mt-2">
        <Card>
          <ListGroup className="text-center">
            <ListGroup.Item>
              <h3>
                Subtotal ({cartItems.reduce((acc, curr) => acc + curr.qty, 0)})
                Items
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>
                Total $
                {cartItems
                  .reduce((acc, curr) => acc + curr.qty * curr.price, 0)
                  .toFixed(2)}{" "}
                Items
              </h3>
            </ListGroup.Item>
            <Button type="button" onClick={checkout}>
              CHECKOUT
            </Button>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default Cart;
