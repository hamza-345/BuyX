import React from 'react'
import {Carousel} from 'react-bootstrap'

const DisplayImages = ({image}) => {
    return (
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="First slide"
    />
    </Carousel.Item>
    )
}

export default DisplayImages
