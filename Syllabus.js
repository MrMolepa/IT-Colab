import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Download as DownloadIcon, BookOpen,Search } from 'react-feather';
import { Tabs, Tab, Form, InputGroup, Button, } from 'react-bootstrap';
import './result.css';

//const year = new Date().getFullYear();

const GET_SYLLABI = gql`
  query {
    syllabi(pagination: { limit: 100 }) {
      data {
        attributes {
          level
          year
          subject_name
          syllabus {
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;

const ITEMS_PER_PAGE = 10;

function Syllabus() {
  const { loading, error, data } = useQuery(GET_SYLLABI);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeYear, setActiveYear] = useState(null);
  const syllabi = data?.syllabi?.data || [];

  // Group syllabi by year
  const syllabiByYear = syllabi.reduce((acc, syllabus) => {
    const year = syllabus.attributes.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(syllabus);
    return acc;
  }, {});

  // Get years for tabs
  const years = Object.keys(syllabiByYear).sort().reverse();
  
  // Set active year to most recent if not set
  useEffect(() => {
    if (years.length > 0 && !activeYear) {
      setActiveYear(years[0]);
    }
  }, [years, activeYear]);

  // Filter syllabi by search term and active year
  const filteredSyllabi = (syllabiByYear[activeYear] || [])
    .filter(syllabus => {
      if (!searchTerm) return true;
      const searchLower = searchTerm.toLowerCase();
      return (
        syllabus.attributes.subject_name.toLowerCase().includes(searchLower) ||
        syllabus.attributes.level.toLowerCase().includes(searchLower)
      );
    });

  // Pagination
  const totalPages = Math.ceil(filteredSyllabi.length / ITEMS_PER_PAGE);
  const paginatedSyllabi = filteredSyllabi.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
          <div className="spinner"></div>
          <p>Loading syllabus...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="results-dashboard">
        <div className="error-state">
          <div className="error-icon">⚠️</div>
          <h3>Error Loading Syllabus</h3>
          <p>We couldn't load the syllabus at this time. Please try again later.</p>
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
          <h2>Subject Syllabus</h2>
        </div>
      </div>

      <div className="container py-4">
        {/* Search Bar */}
        <div className="search-container mb-4">
          <Form onSubmit={handleSearch}>
            <InputGroup>
              <InputGroup.Text className="search-icon">
                <Search size={18} />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search syllabi by subject or level..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <Button 
                  variant="outline-secondary" 
                  onClick={() => setSearchTerm('')}
                  className="clear-search"
                >
                  Clear
                </Button>
              )}
            </InputGroup>
          </Form>
        </div>

        {/* Year Tabs */}
        {years.length > 0 && (
          <Tabs
            activeKey={activeYear}
            onSelect={handleYearChange}
            className="mb-4 year-tabs"
            variant="pills"
          >
            {years.map((year) => (
              <Tab key={year} eventKey={year} title={`${year}`} />
            ))}
          </Tabs>
        )}
        
        {/* Results */}
        {filteredSyllabi.length === 0 ? (
            <div className="no-results text-center py-5">
              <div className="no-results-icon mb-3">
                <BookOpen size={48} className="text-muted" />
              </div>
              <h4>No syllabus found</h4>
              <p className="text-muted">
                {searchTerm 
                  ? 'No syllabus match your search criteria.'
                  : 'No syllabus available for the selected year.'}
              </p>
              {searchTerm && (
                <Button 
                  variant="outline-primary" 
                  onClick={() => setSearchTerm('')}
                  className="mt-2"
                >
                  Clear search
                </Button>
              )}
            </div>
          ) : (
            <div className="row">
              {paginatedSyllabi.map((syllabus, index) => (
                <div key={index} className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <div className="icon-box">
                          <BookOpen size={20} className="text-primary" />
                        </div>
                        <h5 className="card-title mb-0 ms-3">
                          {syllabus.attributes.subject_name}
                          <span className="text-muted d-block small">
                            {syllabus.attributes.level}
                          </span>
                        </h5>
                      </div>
                      <a
                        href={`${process.env.REACT_APP_API_URL}${syllabus.attributes.syllabus.data.attributes.url}`}
                        className="btn btn-primary btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <DownloadIcon size={16} className="me-1" /> Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination-container mt-4">
              <nav aria-label="Syllabus pagination">
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button 
                      className="page-link" 
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                  </li>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    // Show first, last and pages around current
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <li 
                        key={pageNum} 
                        className={`page-item ${currentPage === pageNum ? 'active' : ''}`}
                      >
                        <button 
                          className="page-link" 
                          onClick={() => setCurrentPage(pageNum)}
                        >
                          {pageNum}
                        </button>
                      </li>
                    );
                  })}
                  
                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button 
                      className="page-link" 
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
              <div className="text-center text-muted small mt-2">
                Page {currentPage} of {totalPages}
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default Syllabus;
