import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PropertyCard.css';

const PropertyCard = ({ property }) => {
  const {
    id,
    image,
    title,
    location,
    price,
    status,
    beds,
    baths,
    sqft,
    garages,
    featured,
  } = property;

  return (
    <div className="property-card">
      <div className="property-image">
        <img src={image} alt={title} />
        {featured && <span className="featured-badge">Featured</span>}
        <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>
      </div>
      <div className="property-content">
        <Link to={`/properties/${id}`} className="property-title">
          <h3>{title}</h3>
        </Link>
        <p className="property-location">
          <i className="fas fa-map-marker-alt"></i> {location}
        </p>
        <div className="property-details">
          <span><i className="fas fa-bed"></i> {beds} Beds</span>
          <span><i className="fas fa-bath"></i> {baths} Baths</span>
          <span><i className="fas fa-ruler-combined"></i> {sqft} SQ FT</span>
          <span><i className="fas fa-warehouse"></i> {garages} Garage</span>
        </div>
        <div className="property-price">
          <span className="price">${price.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard; 