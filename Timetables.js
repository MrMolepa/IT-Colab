import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Download as DownloadIcon, Calendar, Clock, Search } from 'react-feather';
import { Tabs, Tab, Form, InputGroup, Button, Row, Col } from 'react-bootstrap';
import './result.css';

const GET_TIMETABLES = gql`
  query {
    timetables(pagination: { limit: 100 }) {
      data {
        attributes {
          level
          session
          year
          timetable {
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

function Timetables() {
  const { loading, error, data } = useQuery(GET_TIMETABLES);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeYear, setActiveYear] = useState(null);
  const timetables = data?.timetables?.data || [];

  // Group timetables by year
  const timetablesByYear = timetables.reduce((acc, timetable) => {
    const year = timetable.attributes.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(timetable);
    return acc;
  }, {});

  // Get years for tabs
  const years = Object.keys(timetablesByYear).sort().reverse();
  
  // Set active year to most recent if not set
  useEffect(() => {
    if (years.length > 0 && !activeYear) {
      setActiveYear(years[0]);
    }
  }, [years, activeYear]);

  // Filter timetables by search term and active year
  const filteredTimetables = (timetablesByYear[activeYear] || [])
    .filter(timetable => {
      if (!searchTerm) return true;
      const searchLower = searchTerm.toLowerCase();
      return (
        timetable.attributes.level.toLowerCase().includes(searchLower) ||
        (timetable.attributes.session?.toLowerCase().includes(searchLower) || '')
      );
    });

  // Pagination
  const totalPages = Math.ceil(filteredTimetables.length / ITEMS_PER_PAGE);
  const paginatedTimetables = filteredTimetables.slice(
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
          <p>Loading timetables...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="results-dashboard">
        <div className="error-state">
          <div className="error-icon">⚠️</div>
          <h3>Error Loading Timetables</h3>
          <p>We couldn't load the timetables at this time. Please try again later.</p>
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
          <h2>Examination Timetables</h2>
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
                placeholder="Search timetables by level or session..."
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
      </div>
      
      <div className="container py-4">
        {filteredTimetables.length === 0 ? (
          <div className="no-results text-center py-5">
            <div className="no-results-icon mb-3">
              <Calendar size={48} className="text-muted" />
            </div>
            <h4>No timetables found</h4>
            <p className="text-muted">
              {searchTerm 
                ? 'No timetables match your search criteria.'
                : 'No timetables available for the selected year.'}
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
            {paginatedTimetables.map((timetable, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-box">
                        <Calendar size={20} className="text-primary" />
                      </div>
                      <h5 className="card-title mb-0 ms-3">
                        {timetable.attributes.level}
                        {timetable.attributes.session && (
                          <span className="text-muted d-block small">
                            {timetable.attributes.session}
                          </span>
                        )}
                      </h5>
                    </div>
                    <a
                      href={`${process.env.REACT_APP_API_URL}${timetable.attributes.timetable.data.attributes.url}`}
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
            <nav aria-label="Timetable pagination">
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

export default Timetables;
