import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Download as DownloadIcon, FileText, Calendar, Search } from 'react-feather';
import { Tabs, Tab, Form, InputGroup, Button } from 'react-bootstrap';
import './result.css';

const GET_EXAMINER_REPORTS = gql`
  query {
    examinerReports(pagination: { limit: 100 }, sort: "year:ASC") {
      data {
        attributes {
          year
          examiner_report(pagination: { limit: 100 }) {
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

const ExaminerReport = () => {
  const { loading, error, data } = useQuery(GET_EXAMINER_REPORTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeYear, setActiveYear] = useState(null);
  const reports = data?.examinerReports?.data || [];

  // Update active year when data loads
  useEffect(() => {
    if (reports.length > 0 && !activeYear) {
      const years = [...new Set(reports.map(r => r.attributes.year))].sort().reverse();
      setActiveYear(years[0]);
    }
  }, [reports, activeYear]);

  // Filter reports by search term and group by year
  const filteredAndGroupedReports = reports.reduce((acc, report) => {
    const { year, examiner_report } = report.attributes;
    const searchLower = searchTerm.toLowerCase();
    
    // Filter by search term
    const filteredItems = examiner_report.data.filter(item => 
      item.attributes.name.toLowerCase().includes(searchLower)
    );
    
    if (filteredItems.length === 0) return acc;
    
    if (!acc[year]) {
      acc[year] = [];
    }
    
    acc[year].push({
      ...report,
      attributes: {
        ...report.attributes,
        examiner_report: { data: filteredItems }
      }
    });
    
    return acc;
  }, {});

  // Get current year's reports
  const currentYearReports = activeYear ? (filteredAndGroupedReports[activeYear] || []) : [];
  
  // Flatten all report items for the current year
  const allReportItems = currentYearReports.flatMap(report => 
    report.attributes.examiner_report.data.map(item => ({
      ...item,
      reportData: report.attributes
    }))
  );

  // Pagination logic
  const totalPages = Math.ceil(allReportItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedReports = allReportItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
          <p>Loading examiner reports...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="results-dashboard">
        <div className="error-state">
          <div className="error-icon">⚠️</div>
          <h3>Error Loading Reports</h3>
          <p>We couldn't load the examiner reports at this time. Please try again later.</p>
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
          <h2>Examiner Reports</h2>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="/home">Home</a>
            </li>
            <li className="list-inline-item active">Examiner Reports</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="section-header">
          <h2>Examiner Reports</h2>
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
                placeholder="Search examiner reports..."
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

        {Object.keys(filteredAndGroupedReports).length > 0 ? (
          <>
            <Tabs 
              activeKey={activeYear}
              onSelect={handleYearChange}
              className="mb-4 year-tabs"
            >
              {Object.keys(filteredAndGroupedReports)
                .sort()
                .reverse()
                .map(year => (
                  <Tab 
                    key={year} 
                    eventKey={year} 
                    title={`${year} (${filteredAndGroupedReports[year][0]?.attributes?.examiner_report?.data?.length || 0})`}
                  />
                ))}
            </Tabs>

            {/* Reports Grid */}
            <div className="results-grid">
              {paginatedReports.length > 0 ? (
                paginatedReports.map(({ attributes: report, reportData }, index) => (
                  <div key={index} className="result-card">
                    <div className="card-icon">
                      <FileText size={24} />
                    </div>
                    <div className="card-content">
                      <h3>{report.name}</h3>
                      <div className="card-meta">
                        <span className="meta-item">
                          <Calendar size={16} className="mr-1" />
                          {reportData.year}
                        </span>
                      </div>
                    </div>
                    <a 
                      href={`${process.env.REACT_APP_API_URL}${report.url}`}
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
                  <p>No reports found{searchTerm ? ` matching "${searchTerm}"` : ''}.</p>
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
            <p>No reports found{searchTerm ? ` matching "${searchTerm}"` : ''}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExaminerReport;
