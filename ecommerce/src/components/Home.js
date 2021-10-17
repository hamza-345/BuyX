import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Product from './Product'

const Home = ({products}) => {
    return (
        <Container>
        <Row>
         {products.map(product => {
             return (
            
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product = {product}/>
                </Col>
            
             )
         })}
         </Row>
        </Container>
    )
}

export default Home
