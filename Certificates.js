import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Search, Download as DownloadIcon, FileText, Calendar } from 'react-feather';
import { Tabs, Tab, Form, InputGroup, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';
import './result.css';

const GET_CETIVICATES_LIST = gql`
  query {
    certificates(pagination: { limit: 100 }) {
      data {
        attributes {
          description
          released_date
          year
          certificates_list {
            data {
              attributes {
                url
                name
              }
            }
          }
        }
      }
    }
  }
`;

const ITEMS_PER_PAGE = 10;

const Certificates = () => {
  const { loading, error, data } = useQuery(GET_CETIVICATES_LIST);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeYear, setActiveYear] = useState(null);
  const certificates = data?.certificates?.data || [];

  // Update active year when data loads
  useEffect(() => {
    if (certificates.length > 0 && !activeYear) {
      const years = [...new Set(certificates.map(c => c.attributes.year))].sort().reverse();
      setActiveYear(years[0]);
    }
  }, [certificates, activeYear]);

  // Filter certificates by search term and group by year
  const filteredAndGroupedCerts = certificates.reduce((acc, cert) => {
    const { year, description, certificates_list } = cert.attributes;
    const searchLower = searchTerm.toLowerCase();
    
    // Filter by search term
    const filteredItems = certificates_list.data.filter(item => 
      item.attributes.name.toLowerCase().includes(searchLower) ||
      description.toLowerCase().includes(searchLower)
    );
    
    if (filteredItems.length === 0) return acc;
    
    if (!acc[year]) {
      acc[year] = [];
    }
    
    acc[year].push({
      ...cert,
      attributes: {
        ...cert.attributes,
        certificates_list: { data: filteredItems }
      }
    });
    
    return acc;
  }, {});

  // Get current year's certificates
  const currentYearCerts = activeYear ? (filteredAndGroupedCerts[activeYear] || []) : [];
  
  // Flatten all certificate items for the current year
  const allCertItems = currentYearCerts.flatMap(cert => 
    cert.attributes.certificates_list.data.map(item => ({
      ...item,
      certData: cert.attributes
    }))
  );

  // Pagination logic
  const totalPages = Math.ceil(allCertItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCerts = allCertItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleYearChange = (year) => {
    setActiveYear(year);
    setCurrentPage(1);
  };
  if (loading) {
    return (
      <div className="results-dashboard">
        <div className="loading-state">
          <Spinner animation="border" role="status" />
          <p>Loading certificates...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="results-dashboard">
        <div className="error-state">
          <div className="error-icon">⚠️</div>
          <h3>Error Loading Certificates</h3>
          <p>We couldn't load the certificates at this time. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="results-dashboard">
      {/* Header Banner */}
      <div 
        className="main-banner" 
        style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./images/banner/banner1.png) center/cover no-repeat'
        }}
      >
        <div className="container">
          <h2>Certificates</h2>
        </div>
      </div>
      
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="/home">Home</a>
            </li>
            <li className="list-inline-item active">Certificates</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="section-header">
          <h2>Certificates</h2>
          <div className="divider"></div>
        </div>

        {/* Search Bar */}
        <div className="search-container mb-4">
          <Form onSubmit={handleSearch}>
            <InputGroup>
              <InputGroup.Text className="search-icon">
                <Search size={18} />
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Search certificates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <Button variant="primary" type="submit">
                Search
              </Button>
            </InputGroup>
          </Form>
        </div>

        {/* Year Tabs */}
        {Object.keys(filteredAndGroupedCerts).length > 0 ? (
          <>
            <Tabs 
              activeKey={activeYear}
              onSelect={handleYearChange}
              className="mb-4 year-tabs"
            >
              {Object.keys(filteredAndGroupedCerts)
                .sort()
                .reverse()
                .map(year => (
                  <Tab 
                    key={year} 
                    eventKey={year} 
                    title={`${year} (${filteredAndGroupedCerts[year].length})`}
                  />
                ))}
            </Tabs>

            {/* Certificates Grid */}
            <div className="results-grid">
              {paginatedCerts.length > 0 ? (
                paginatedCerts.map(({ attributes: certItem, certData }, index) => (
                  <div key={index} className="result-card">
                    <div className="card-icon">
                      <FileText size={24} />
                    </div>
                    <div className="card-content">
                      <h3>{certItem.name}</h3>
                      <p className="mb-2 text-muted">{certData.description}</p>
                      <div className="card-meta">
                        <span className="meta-item">
                          <Calendar size={16} className="mr-1" />
                          {certData.year}
                        </span>
                      </div>
                    </div>
                    <a 
                      href={`${process.env.REACT_APP_API_URL}${certItem.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="download-btn"
                    >
                      <DownloadIcon size={18} className="mr-1" />
                      Download
                    </a>
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <p>No certificates found{searchTerm ? ` matching "${searchTerm}"` : ''}.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination-container">
                <Button 
                  variant="outline-primary" 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="pagination-btn"
                >
                  Previous
                </Button>
                <span className="page-info">
                  Page {currentPage} of {totalPages}
                </span>
                <Button 
                  variant="outline-primary" 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="pagination-btn"
                >
                  Next
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="no-results">
            <p>No certificates found{searchTerm ? ` matching "${searchTerm}"` : ''}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
