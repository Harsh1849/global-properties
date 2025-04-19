import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import PropertyCard from '../components/PropertyCard';
import Values from '../components/Values';
import Statistics from '../components/Statistics';
import '../styles/Home.css';

const Home = () => {
  const featuredProperties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3',
      title: 'Beautiful Single Home',
      location: '123 Kathal St. Tampa City, FL',
      price: 720000,
      status: 'For Sale',
      beds: 4,
      baths: 4,
      sqft: 920,
      garages: 1,
      featured: true
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3',
      title: 'Modern Family Home',
      location: '456 Brighton Ave. Miami, FL',
      price: 825000,
      status: 'For Rent',
      beds: 4,
      baths: 4,
      sqft: 920,
      garages: 1,
      featured: true
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3',
      title: 'Sweet Family Home',
      location: '789 Park Rd. New York, NY',
      price: 925000,
      status: 'For Sale',
      beds: 4,
      baths: 4,
      sqft: 920,
      garages: 1,
      featured: true
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3',
      title: 'Luxury Villa',
      location: '321 Ocean Drive, Miami Beach, FL',
      price: 1250000,
      status: 'For Sale',
      beds: 5,
      baths: 5,
      sqft: 1200,
      garages: 2,
      featured: true
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3',
      title: 'Modern Apartment',
      location: '567 Downtown St. Los Angeles, CA',
      price: 495000,
      status: 'For Rent',
      beds: 2,
      baths: 2,
      sqft: 750,
      garages: 1,
      featured: true
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3',
      title: 'Cozy Townhouse',
      location: '890 Lake View Dr. Seattle, WA',
      price: 685000,
      status: 'For Sale',
      beds: 3,
      baths: 3,
      sqft: 850,
      garages: 1,
      featured: true
    }
  ];

  const propertyTypes = [
    {
      id: 1,
      title: 'Apartments',
      icon: 'fa-building',
      count: 156,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      title: 'Houses',
      icon: 'fa-home',
      count: 89,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      title: 'Commercial',
      icon: 'fa-store',
      count: 45,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      title: 'Luxury',
      icon: 'fa-crown',
      count: 32,
      image: 'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  const recentProperties = [
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3',
      title: 'Modern Family Home',
      location: '456 Brighton Ave. Miami, FL',
      price: 825000,
      status: 'For Rent',
      beds: 4,
      baths: 4,
      sqft: 920,
      garages: 1,
      featured: false,
      date: '2 days ago'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3',
      title: 'Sweet Family Home',
      location: '789 Park Rd. New York, NY',
      price: 925000,
      status: 'For Sale',
      beds: 4,
      baths: 4,
      sqft: 920,
      garages: 1,
      featured: false,
      date: '3 days ago'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3',
      title: 'Luxury Villa',
      location: '321 Ocean Drive, Miami Beach, FL',
      price: 1250000,
      status: 'For Sale',
      beds: 5,
      baths: 5,
      sqft: 1200,
      garages: 2,
      featured: false,
      date: '4 days ago'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3',
      title: 'Modern Apartment',
      location: '567 Downtown St. Los Angeles, CA',
      price: 495000,
      status: 'For Rent',
      beds: 2,
      baths: 2,
      sqft: 750,
      garages: 1,
      featured: false,
      date: '5 days ago'
    }
  ];

  const popularPlaces = [
    {
      id: 1,
      name: 'Miami Beach',
      image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3',
      properties: 156,
      location: 'Florida, USA'
    },
    {
      id: 2,
      name: 'New York',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3',
      properties: 245,
      location: 'New York, USA'
    },
    {
      id: 3,
      name: 'Los Angeles',
      image: 'https://images.unsplash.com/photo-1515896769750-31548aa180ed?ixlib=rb-4.0.3',
      properties: 189,
      location: 'California, USA'
    },
    {
      id: 4,
      name: 'Chicago',
      image: 'https://images.unsplash.com/photo-1513642629402-cb8354b7f5f1?ixlib=rb-4.0.3',
      properties: 132,
      location: 'Illinois, USA'
    },
    {
      id: 5,
      name: 'San Francisco',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3',
      properties: 178,
      location: 'California, USA'
    },
    {
      id: 6,
      name: 'Seattle',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3',
      properties: 145,
      location: 'Washington, USA'
    }
  ];

  const ourAgents = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Senior Agent',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
      properties: 45,
      phone: '+1 234 567 890',
      email: 'john.smith@example.com',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Luxury Specialist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
      properties: 38,
      phone: '+1 234 567 891',
      email: 'sarah.johnson@example.com',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Michael Brown',
      role: 'Commercial Expert',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3',
      properties: 52,
      phone: '+1 234 567 892',
      email: 'michael.brown@example.com',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Residential Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3',
      properties: 41,
      phone: '+1 234 567 893',
      email: 'emily.davis@example.com',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'David Wilson',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
      rating: 5,
      text: 'Working with Global Properties was an absolute pleasure. Their team helped me find my dream home in just two weeks. The attention to detail and personalized service made all the difference.'
    },
    {
      id: 2,
      name: 'Jennifer Martinez',
      role: 'Investor',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
      rating: 5,
      text: 'As a real estate investor, I need a reliable partner. Global Properties has consistently delivered exceptional results. Their market knowledge and negotiation skills are unmatched.'
    },
    {
      id: 3,
      name: 'Robert Chen',
      role: 'First-time Buyer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3',
      rating: 5,
      text: 'Being a first-time homebuyer was overwhelming, but the team at Global Properties guided me through every step. They made the process smooth and stress-free.'
    }
  ];

  return (
    <div className="home">
      <HeroCarousel />
      <div className="container">
        {/* Featured Properties Section */}
        <section className="featured-properties">
          <div className="section-header">
            <h2>Featured Properties</h2>
            <p>Discover our handpicked selection of premium properties</p>
          </div>
          <div className="properties-grid">
            {featuredProperties.map((property, index) => (
              <div className="property-card-wrapper" key={property.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
          {/* <div className="view-all-wrapper">
            <Link to="/properties" className="btn-view-all">
              View All Properties
            </Link>
          </div> */}
        </section>

        {/* What Are You Looking For Section */}
        <section className="property-types">
          <div className="section-header">
            <h2>What Are You Looking For?</h2>
            <p>Browse properties by category to find your perfect match</p>
          </div>
          <div className="property-types-grid">
            {propertyTypes.map((type, index) => (
              <div className="property-type-card" key={type.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="property-type-image">
                  <img src={type.image} alt={type.title} />
                  <div className="property-type-overlay">
                    <i className={`fas ${type.icon}`}></i>
                    <h3>{type.title}</h3>
                    <span className="property-count">{type.count} Properties</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recently Properties Section */}
        <section className="recent-properties">
          <div className="section-header">
            <h2>Recently Added Properties</h2>
            <p>Discover our latest property listings</p>
          </div>
          <div className="properties-grid">
            {recentProperties.map((property, index) => (
              <div className="property-card-wrapper" key={property.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <PropertyCard property={property} />
                <div className="property-date">
                  <i className="fas fa-clock"></i>
                  <span>{property.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-wrapper">
            <Link to="/properties" className="btn-view-all">
              View All Recent Properties
            </Link>
          </div>
        </section>

        {/* Popular Places Section */}
        <section className="popular-places">
          <div className="section-header">
            <h2>Popular Places</h2>
            <p>Explore properties in the most sought-after locations</p>
          </div>
          <div className="places-grid">
            {popularPlaces.map((place, index) => (
              <div className="place-card" key={place.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="place-image">
                  <img src={place.image} alt={place.name} />
                  <div className="place-overlay">
                    <div className="place-content">
                      <h3>{place.name}</h3>
                      <p className="place-location">{place.location}</p>
                      <div className="place-properties">
                        <i className="fas fa-home"></i>
                        <span>{place.properties} Properties</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-wrapper">
            <Link to="/locations" className="btn-view-all">
              View All Locations
            </Link>
          </div>
        </section>

        {/* Our Agents Section */}
        <section className="our-agents">
          <div className="section-header">
            <h2>Our Agents</h2>
            <p>Meet our team of experienced real estate professionals</p>
          </div>
          <div className="agents-grid">
            {ourAgents.map((agent, index) => (
              <div className="agent-card" key={agent.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="agent-image">
                  <img src={agent.image} alt={agent.name} />
                  <div className="agent-overlay">
                    <div className="agent-social">
                      <a href={agent.social.facebook}><i className="fab fa-facebook-f"></i></a>
                      <a href={agent.social.twitter}><i className="fab fa-twitter"></i></a>
                      <a href={agent.social.instagram}><i className="fab fa-instagram"></i></a>
                      <a href={agent.social.linkedin}><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
                <div className="agent-content">
                  <h3>{agent.name}</h3>
                  <p className="agent-role">{agent.role}</p>
                  <div className="agent-details">
                    <div className="agent-properties">
                      <i className="fas fa-home"></i>
                      <span>{agent.properties} Properties</span>
                    </div>
                    <div className="agent-contact">
                      <a href={`tel:${agent.phone}`}><i className="fas fa-phone"></i></a>
                      <a href={`mailto:${agent.email}`}><i className="fas fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-wrapper">
            <Link to="/agents" className="btn-view-all">
              View All Agents
            </Link>
          </div>
        </section>

        <section className="testimonials">
          <div className="container">
            <div className="section-header">
              <h2>What Our Clients Say</h2>
              <p>Hear from our satisfied clients about their experience with Global Properties</p>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={testimonial.id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="blog-section">
          <div className="container">
            <div className="section-header">
              <h2>OUR BLOG</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
            </div>
            {/* Blog content will be added here */}
          </div>
        </section>

        {/* Add Values section */}
        <Values />

        {/* Add Statistics section */}
        <Statistics />

        <section className="blog-section">
          <div className="container">
            <div className="section-header">
              <h2>OUR BLOG</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
            </div>
            {/* Blog content will be added here */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home; 