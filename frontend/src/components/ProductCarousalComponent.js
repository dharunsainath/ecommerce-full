import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCarousalComponent = () => {

  const cursorP = {
    cursor: 'pointer'
  }
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-1.png"
          alt="First slide"
          style={{ height: "300px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="product-details">
            <h3>Best Seller in laptops</h3>
          </LinkContainer>

          <p>DELL Inspiron I5 Laptop 15.6inch HD</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-2.png"
          alt="Second slide"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="product-details">
            <h3>Best Seller in laptops</h3>
          </LinkContainer>

          <p>DELL Inspiron I5 Laptop 15.6inch HD</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-3.png"
          alt="Third slide"
          style={{ height: "300px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="product-details">
            <h3>Best Seller in laptops</h3>
          </LinkContainer>

          <p>DELL Inspiron I5 Laptop 15.6inch HD</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousalComponent