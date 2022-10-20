import React from 'react';
import { Carousel } from 'react-bootstrap';

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
            <Carousel.Item>
                <img style={{ height: '12rem' }}
                className="d-block w-100 "
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>nick logo</h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '12rem' }}
                className="d-block w-100 "
                src="https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1703&q=80"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '12rem' }}
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1508849789987-4e5333c12b78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2193&q=80"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>logoes</h3>
                <p>
                   
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;