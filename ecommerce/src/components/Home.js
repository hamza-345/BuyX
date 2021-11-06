import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "./Product";
import { listProductsAction } from "../actions/productActions";
import Loading from "./Loading";
import Error from "./Error";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProductsAction());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error variant="danger">{error}</Error>
      ) : (
        <Row>
          {products.map(product =>
          (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product ={product}/>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
