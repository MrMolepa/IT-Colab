import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Download as DownloadIcon, Search, Calendar, BookOpen } from 'react-feather';
import { Tabs, Tab, Form, InputGroup, Button, Row, Col } from 'react-bootstrap';
import './result.css';

const GET_QUESTION_PAPERS = gql`
  query {
    pastQuestionPapers(pagination: { limit: 100 }) {
      data {
        attributes {
          year
          question_paper {
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

const ITEMS_PER_PAGE = 12;

function PastQuestionPaper() {
  const { loading, error, data } = useQuery(GET_QUESTION_PAPERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeYear, setActiveYear] = useState(null);
  const pastQuestionPapers = data?.pastQuestionPapers?.data || [];

  // Update active year when data loads
  useEffect(() => {
    if (pastQuestionPapers.length > 0 && !activeYear) {
      const years = [...new Set(pastQuestionPapers.map(p => p.attributes.year))].sort().reverse();
      setActiveYear(years[0]);
    }
  }, [pastQuestionPapers, activeYear]);

  if (loading) {
    return (
      <div className="results-dashboard">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading past question papers...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="results-dashboard">
        <div className="error-state">
          <div className="error-icon">⚠️</div>
          <h3>Error Loading Question Papers</h3>
          <p>We couldn't load the question papers at this time. Please try again later.</p>
        </div>
      </div>
    );
  }

  // Filter and group question papers by year
  const filteredAndGroupedPapers = pastQuestionPapers.reduce((acc, paper) => {
    const { year, question_paper } = paper.attributes;
    const paperName = question_paper.data.attributes.name.toLowerCase();
    
    // Apply search filter
    if (searchTerm && !paperName.includes(searchTerm.toLowerCase())) {
      return acc;
    }
    
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(paper);
    return acc;
  }, {});

  // Get papers for current active year
  const currentYearPapers = activeYear ? (filteredAndGroupedPapers[activeYear] || []) : [];
  
  // Pagination logic
  const totalPages = Math.ceil(currentYearPapers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPapers = currentYearPapers.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleYearChange = (year) => {
    setActiveYear(year);
    setCurrentPage(1); // Reset to first page when changing year
  };

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
          <h2>Past Question Papers</h2>
        </div>
      </div>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="/home">Home</a>
            </li>
            <li className="list-inline-item active">Past Question Papers</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="section-header">
          <h2>Past Question Papers</h2>
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
                placeholder="Search question papers..."
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
        <Tabs 
          activeKey={activeYear}
          onSelect={handleYearChange}
          className="mb-4 year-tabs"
        >
          {Object.keys(filteredAndGroupedPapers)
            .sort()
            .reverse()
            .map(year => (
              <Tab 
                key={year} 
                eventKey={year} 
                title={`${year} (${filteredAndGroupedPapers[year].length})`}
              />
            ))}
        </Tabs>

        {/* Results Grid */}
        <div className="results-grid">
          {paginatedPapers.length > 0 ? (
            paginatedPapers.map((paper, index) => (
                  <div key={index} className="result-card">
                    <div className="card-icon">
                      <BookOpen size={24} />
                    </div>
                    <div className="card-content">
                      <h3>{paper.attributes.question_paper.data.attributes.name}</h3>
                      <div className="card-meta">
                        <span className="meta-item">
                          <Calendar size={16} className="mr-1" />
                          {paper.attributes.year}
                        </span>
                      </div>
                    </div>
                    <a 
                      href={`${process.env.REACT_APP_API_URL}${paper.attributes.question_paper.data.attributes.url}`}
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
              <p>No question papers found{searchTerm ? ` matching "${searchTerm}"` : ''}.</p>
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
      </div>
    </div>
  );
}

export default PastQuestionPaper;
