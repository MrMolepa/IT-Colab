import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import './slider.css';
import { useQuery, gql } from '@apollo/client';

const GET_SLIDES = gql`
  query {
    slide {
      data {
        attributes {
          slides {
            title
            description
            button_url
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

function Slider() {
  const { data, loading, error } = useQuery(GET_SLIDES);
  const slides = data?.slide?.data?.attributes?.slides;

  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  if (loading) {
    return (
      <div className="modern-slider">
        <div className="slider-loading">
          <div className="loading-skeleton" style={{ height: '300px' }}></div>
        </div>
      </div>
    );
  }

  if (error || !slides) {
    return (
      <div className="modern-slider">
        <div className="slider-error" style={{ height: '300px' }}>
          <div className="container h-100 d-flex flex-column justify-content-center text-center">
            <h2>Welcome to ECoL</h2>
            <p>Examinations Council of Lesotho - Your Gateway to Quality Education</p>
            <div className="link-btn">
              <a href="/services" className="btn btn-primary">
                View Services
              </a>
              <a href="/about-us" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`modern-slider ${isVisible ? 'animate-fade-in-up' : ''}`}>
      <div className="slider-container" style={{ height: '300px' }}>
        {slides && (
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="modern-carousel"
            interval={5000}
            fade
            indicators={true}
            controls={true}
          >
            {slides?.map((slide, slideIndex) => (
              <Carousel.Item key={slideIndex}>
                <div className="slider-wrapper" style={{ height: '300px' }}>
                  <div
                    className="slider-image"
                    style={{
                      height: '300px',
                      backgroundImage:
                        'url(' +
                        process.env.REACT_APP_API_URL +
                        slide?.image?.data?.attributes?.url +
                        ')',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  <div className="slider-overlay"></div>
                  <div className="slider-content h-100 d-flex flex-column justify-content-center text-center">
                    <div className="container">
                      <div className="slider-caption">
                        <h1 className="slider-title animate-fade-in-left">
                          {slide?.title}
                        </h1>
                        <p className="slider-description animate-fade-in-right">
                          {slide?.description}
                        </p>
                        <div className="slider-buttons animate-fade-in-up">
                          <a href="/services" className="btn btn-primary">
                            <i className="fas fa-cogs"></i>
                            View Services
                          </a>
                          <a
                            href={'/' + slide?.button_url}
                            className="btn btn-secondary"
                          >
                            <i className="fas fa-arrow-right"></i>
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default Slider;
