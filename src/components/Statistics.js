import React, { useState, useEffect } from 'react';
import './Statistics.css';

const AnimatedNumber = ({ number, duration, prefix = '', suffix = '', startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const end = number;
    const incrementTime = duration / end;
    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [number, duration, startAnimation]);

  return (
    <span className="stat-number">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      id: 1,
      number: 1000,
      suffix: '+',
      label: 'Advised clients',
      duration: 2000, // Animation duration in milliseconds
    },
    {
      id: 2,
      number: 800,
      suffix: '+',
      label: 'Access to properties',
      duration: 2000,
    },
    {
      id: 3,
      number: 50,
      suffix: '+',
      label: 'Developer projects',
      duration: 1500,
    },
    {
      id: 4,
      number: 100,
      suffix: '+',
      label: 'Exclusive deals annually',
      duration: 1800,
    },
    {
      id: 5,
      number: 1,
      prefix: '$',
      suffix: 'B',
      label: 'Worth of property',
      duration: 2500,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.statistics-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section className="statistics-section">
      <div className="statistics-overlay"></div>
      <div className="container">
        <div className="statistics-grid">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.id}>
              <AnimatedNumber
                number={stat.number}
                duration={stat.duration}
                prefix={stat.prefix}
                suffix={stat.suffix}
                startAnimation={isVisible}
              />
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics; 