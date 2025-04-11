import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/HeroCarousel.css';

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80',
      title: 'SWEET HOME FOR SMALL FAMILY',
      subtitle: 'Allow us to guide you through the innovative stress free approach in finding your dream Properties.',
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'FIND YOUR DREAM HOME',
      subtitle: 'Discover the perfect property that matches your lifestyle and preferences.',
    },
    {
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      title: 'LUXURY PROPERTIES',
      subtitle: 'Explore our collection of premium properties in prime locations.',
    },
  ];

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <div 
              className="slide-content"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <div className="hero-buttons">
                  <button className="btn btn-primary">Get Started Now</button>
                  <button className="btn btn-secondary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="search-form">
        <div className="search-container">
          <select className="search-input">
            <option value="">Area From</option>
            <option value="50">50 sq ft</option>
            <option value="100">100 sq ft</option>
            <option value="200">200 sq ft</option>
          </select>
          
          <select className="search-input">
            <option value="">Property Status</option>
            <option value="rent">For Rent</option>
            <option value="sale">For Sale</option>
          </select>

          <select className="search-input">
            <option value="">Location</option>
            <option value="newyork">New York</option>
            <option value="london">London</option>
            <option value="paris">Paris</option>
          </select>

          <select className="search-input">
            <option value="">Property Types</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
          </select>

          <select className="search-input">
            <option value="">Bedrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3+</option>
          </select>

          <select className="search-input">
            <option value="">Bathrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3+</option>
          </select>

          <div className="price-range">
            <span>0 USD</span>
            <input 
              type="range" 
              min="0" 
              max="150000" 
              className="range-slider" 
              defaultValue="75000"
            />
            <span>150000 USD</span>
          </div>

          <button className="search-button">SEARCH</button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel; 