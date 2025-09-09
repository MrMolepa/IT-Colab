import React, { useState, useEffect } from 'react';
import '../../whoweare/colors.css';
import './aboutinfo.css';
import Accordion from 'react-bootstrap/Accordion';

function Aboutinfo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const accordionItems = [
    {
      id: "mandate",
      title: "Mandate",
      icon: "fas fa-bullseye",
      content: "Our mandate is to develop, regulate and maintain an effective assessment system for basic education that responds to the educational needs of learners in Lesotho"
    },
    {
      id: "mission",
      title: "Mission",
      icon: "fas fa-rocket",
      content: "To develop a system of assessment at the basic education level that provides qualifications that address diverse educational needs of learners in the country, the region, and beyond."
    },
    {
      id: "vision",
      title: "Vision",
      icon: "fas fa-eye",
      content: "An advanced, progressive and credible school assessment system that provides qualifications of high quality in basic education that are recognized locally, regionally and internationally."
    },
    {
      id: "values",
      title: "Values",
      icon: "fas fa-heart",
      content: "To achieve the Vision and accomplish the Mission, the following values shall be upheld in all ECoL dealings with its clients and stakeholders"
    }
  ];

  return (
    <section className={`modern-about-section ${isVisible ? 'animate-fade-in-up' : ''}`}>
      <div className="modern-container">
        <div className="section-header">
          <h2>Who is ECoL?</h2>
          <p>Examinations Council of Lesotho - Leading Educational Excellence</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="text-content">
              <p>
                The Examinations Council of Lesotho (ECoL) serves as the
                authority responsible for developing, overseeing, and
                maintaining a robust assessment system for Basic Education
                that addresses Lesotho's educational requirements. ECoL
                administers the Grade 7 End-of-Level Assessment, which gauges
                learners' attainment of learning goals as they transition to
                the Secondary Phase. Additionally, ECoL manages Grade 11
                public examinations for the Lesotho General Certificate of
                Secondary Education (LGCSE), a qualification endorsed by the
                National University of Lesotho (NUL) for quality assurance.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Years of Excellence</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100K+</div>
                  <div className="stat-label">Students Served</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Schools Partnered</div>
                </div>
              </div>
              <a href="/about-us" className="btn btn-primary">
                <i className="fas fa-arrow-right"></i>
                Learn More About Us
              </a>
            </div>
          </div>
          
          <div className="about-accordion">
            <div className="modern-accordion">
              <Accordion defaultActiveKey="mandate" className="custom-accordion">
                {accordionItems.map((item, index) => (
                  <Accordion.Item 
                    key={item.id} 
                    eventKey={item.id}
                    className="accordion-item-modern"
                  >
                    <Accordion.Header className="accordion-header-modern">
                      <div className="accordion-title">
                        <i className={item.icon}></i>
                        <span>{item.title}</span>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body-modern">
                      <p>{item.content}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutinfo;
