import React, { useState, useEffect } from 'react';
import './whoweare.css';

function Whoweare() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const portals = [
    {
      id: 1,
      title: "Online Registration",
      description: "Register for examinations online",
      icon: "fas fa-address-card",
      link: "https://ecol.org.ls/private-candidate",
      color: "#598abf"
    },
    {
      id: 2,
      title: "e-Services",
      description: "Access our digital services",
      icon: "fas fa-credit-card",
      link: "https://ecol.org.ls/services",
      color: "#e1b20b"
    },
    {
      id: 3,
      title: "My Result",
      description: "Check your examination results",
      icon: "fas fa-search",
      link: "/my-result",
      color: "#d2b356"
    }
  ];

  return (
    <section className={`modern-portals ${isVisible ? 'animate-fade-in-up' : ''}`}>
      <div className="modern-container">
        <div className="section-header">
          <h2>Quick Access Portals</h2>
          <p>Access our services and resources with just one click</p>
        </div>
        
        <div className="portals-grid">
          {portals.map((portal, index) => (
            <a
              key={portal.id}
              href={portal.link}
              className={`portal-card animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="portal-icon">
                <i className={portal.icon}></i>
              </div>
              <div className="portal-content">
                <h3>{portal.title}</h3>
                <p>{portal.description}</p>
              </div>
              <div className="portal-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Whoweare;



