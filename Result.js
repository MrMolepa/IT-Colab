import React, { useState } from 'react';
import './result.css';
import { useQuery, gql } from '@apollo/client';
import { 
  Download as DownloadIcon, 
  Award, 
  Home as School, // Using Home icon as a replacement for School
  FileText, 
  Search, 
  Share2, 
  AlertTriangle,
} from 'react-feather';

const GET_RESULT_LGCSE = gql`
  query {
    resultStatistics(
      filters: { level: { eq: "LGCSE" } }
      pagination: { limit: 100 }
    ) {
      data {
        attributes {
          level
          year
          top_achievers {
            data {
              attributes {
                url
              }
            }
          }
          school_performance {
            data {
              attributes {
                url
              }
            }
          }
          district_performance {
            data {
              attributes {
                url
              }
            }
          }
          subject_performance {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const GET_RESULT_JC = gql`
  query {
    resultStatistics(filters: { level: { eq: "JC" } }) {
      data {
        attributes {
          level
          year
          top_achievers {
            data {
              attributes {
                url
              }
            }
          }
          school_performance {
            data {
              attributes {
                url
              }
            }
          }
          results {
            data {
              attributes {
                url
              }
            }
          }
          subject_performance {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const Result = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6); // 3 or 6 items
  const [filters, setFilters] = useState({
    sortBy: 'recent' // 'recent' or 'oldest'
  });
  
  // Fetch LGCSE and JC results
  const { data: lgcseData, loading: lgcsLoading, error: lgcsError } = useQuery(GET_RESULT_LGCSE);
  const { data: jcData, loading: jcLoading, error: jcError } = useQuery(GET_RESULT_JC);
  
  // Extract results from GraphQL response
  const lgcseResults = lgcseData?.resultStatistics?.data || [];
  const jcResults = jcData?.resultStatistics?.data || [];
  
  // Function to handle file download
  const handleDownload = async (url, filename) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`);
      if (!response.ok) throw new Error('Failed to download file');
      
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Download failed:', error);
      // Show error message to user
      alert('Failed to download file. Please try again later.');
    }
  };

  // Process and sort results
  let processedResults = [...lgcseResults, ...jcResults]
    .filter(result => {
      if (!result || !result.attributes) return false;
      
      // Apply search term filter
      const searchLower = searchTerm.toLowerCase();
      return searchTerm === '' || 
        (result.attributes.level && result.attributes.level.toLowerCase().includes(searchLower)) ||
        (result.attributes.year && result.attributes.year.toString().includes(searchTerm));
    });

  // Sort results
  processedResults = processedResults.sort((a, b) => {
    if (filters.sortBy === 'recent') {
      return b.attributes.year - a.attributes.year || 
             b.attributes.level.localeCompare(a.attributes.level);
    } else {
      return a.attributes.year - b.attributes.year || 
             a.attributes.level.localeCompare(b.attributes.level);
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(processedResults.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentResults = processedResults.slice(startIndex, endIndex);
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage >= totalPages - 1;

  const handleNextPage = () => {
    if (!isLastPage) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (!isFirstPage) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(0); // Reset to first page when changing items per page
  };

  const handleSortChange = (e) => {
    setFilters({
      sortBy: e.target.value
    });
    setCurrentPage(0); // Reset to first page when sort changes
  };

  // Statistics data (2022 figures)
  const stats = [
    { id: 2, title: 'Active Schools', value: '1,200+', icon: School, color: '#28a745' },
    { id: 3, title: 'Examination Centers', value: '1,500+', icon: FileText, color: '#fd7e14' },
    { id: 4, title: 'Top Achievers', value: '200+', icon: Award, color: '#6f42c1' }
  ];

  const tabItems = [
    { id: 'all', label: 'All Reports' }
  ];

  // Helper function to get current year
  //const years= Array.from({length: 6}, (_, i) => currentYear - i); // Last 6 years
  return (
    <div className="results-dashboard">
      {/* Original Header Section */}
      <div
        className="main-banner"
        style={{
          background: 'url(./images/banner/banner1.png) center top',
        }}
      >
        <div className="container px-md-0">
          <h2>
            <span>Results & Statistics</span>
          </h2>
        </div>
      </div>
      <div className="breadcrumb">
        <div className="container px-md-0">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="/home">Home</a>
            </li>
            <li className="list-inline-item active">Results</li>
          </ul>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="stats-container">
        <div className="container">
          <div className="stats-grid">
            {stats.map(stat => {
              const Icon = stat.icon;
              return (
                <div key={stat.id} className="stat-card">
                  <div className="stat-icon" style={{ backgroundColor: stat.color + '20', color: stat.color }}>
                    <Icon size={24} />
                  </div>
                  <div className="stat-content">
                    <p className="stat-title">{stat.title}</p>
                    <h3 className="stat-value">{stat.value}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Controls Container */}
        <div className="controls-container">
          <div className="filter-group">
            <label htmlFor="items-per-page">Show:</label>
            <select 
              id="items-per-page"
              className="filter-select"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value={3}>3 per page</option>
              <option value={6}>6 per page</option>
              <option value={12}>12 per page</option>
            </select>
            
            <select
              name="sortBy"
              className="filter-select"
              value={filters.sortBy}
              onChange={handleSortChange}
            >
              <option value="recent">Most Recent</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
          
          <div className="slider-controls">
            <button 
              className="slider-btn"
              onClick={handlePrevPage}
              disabled={isFirstPage}
            >
              Previous
            </button>
            <span className="page-indicator">
              Page {currentPage + 1} of {Math.max(1, totalPages)}
            </span>
            <button 
              className="slider-btn"
              onClick={handleNextPage}
              disabled={isLastPage}
            >
              Next
            </button>
          </div>
        </div>

        {/* Tabs and Search */}
        <div className="tabs-header">
          <div className="tabs">
            {tabItems.map(tab => (
              <button
                key={tab.id}
                className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="search-container">
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search results..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className={`results-grid layout-${itemsPerPage <= 3 ? '3' : '6'}`}>
          {currentResults.length === 0 ? (
            <div className="no-results">
              <p>No results found matching your criteria</p>
              <button 
                className="clear-filters"
                onClick={() => {
                  setFilters({
                    level: 'all',
                    year: '',
                    hasReport: 'all',
                    sortBy: 'recent'
                  });
                  setSearchTerm('');
                  setCurrentPage(0);
                }}
              >
                Clear all filters
              </button>
            </div>
          ) : (
          currentResults.map((result, index) => {
            const { year, level } = result.attributes;
            
            return (
              <div key={`${level}-${year}-${index}`} className="result-card">
                <div className="card-header">
                  <h3>{level} Results {year}</h3>
                </div>
                
                <div className="reports-section">
                  <h4>Available Reports</h4>
                  <div className="report-tags">
                    {result.attributes.school_performance?.data?.attributes?.url && (
                      <span className="tag primary">School Performance</span>
                    )}
                    {result.attributes.subject_performance?.data?.attributes?.url && (
                      <span className="tag success">Subject Analysis</span>
                    )}
                    {result.attributes.district_performance?.data?.attributes?.url && (
                      <span className="tag info">Regional Stats</span>
                    )}
                    {result.attributes.top_achievers?.data?.attributes?.url && (
                      <span className="tag warning">Top Achievers</span>
                    )}
                  </div>
                </div>
                
                <div className="card-actions">
                  <div className="action-buttons">
                    {result.attributes.top_achievers?.data?.attributes?.url && (
                      <button
                        onClick={() => handleDownload(
                          result.attributes.top_achievers.data.attributes.url,
                          `${level}_Top_Achievers_${year}.pdf`
                        )}
                        className="action-btn"
                        title="Download Top Achievers"
                      >
                        <DownloadIcon size={16} />
                      </button>
                    )}
                    {result.attributes.school_performance?.data?.attributes?.url && (
                      <button
                        onClick={() => handleDownload(
                          result.attributes.school_performance.data.attributes.url,
                          `${level}_School_Performance_${year}.pdf`
                        )}
                        className="action-btn"
                        title="Download School Performance"
                      >
                        <DownloadIcon size={16} />
                      </button>
                    )}
                    {result.attributes.district_performance?.data?.attributes?.url && (
                      <button
                        onClick={() => handleDownload(
                          result.attributes.district_performance.data.attributes.url,
                          `${level}_District_Performance_${year}.pdf`
                        )}
                        className="action-btn"
                        title="Download District Performance"
                      >
                        <DownloadIcon size={16} />
                      </button>
                    )}
                    {result.attributes.subject_performance?.data?.attributes?.url && (
                      <button
                        onClick={() => handleDownload(
                          result.attributes.subject_performance.data.attributes.url,
                          `${level}_Subject_Performance_${year}.pdf`
                        )}
                        className="action-btn"
                        title="Download Subject Performance"
                      >
                        <DownloadIcon size={16} />
                      </button>
                    )}
                    <button className="action-btn" title="Share">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          }))}
          
          {/* Loading State */}
          {(lgcsLoading || jcLoading) && (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading results...</p>
            </div>
          )}
          
          {/* Error State */}
          {(lgcsError || jcError) && (
            <div className="error-state">
              <AlertTriangle size={24} />
              <p>Error loading results. Please try again later.</p>
              <button 
                className="retry-btn"
                onClick={() => {
                  if (lgcsError) lgcseData.refetch();
                  if (jcError) jcData.refetch();
                }}
              >
                Retry
              </button>
            </div>
          )}
        </div>
        
        {/* Bottom Pagination */}
        {totalPages > 1 && (
          <div className="controls-container" style={{ justifyContent: 'flex-end', marginTop: '2rem' }}>
            <div className="slider-controls">
              <button 
                className="slider-btn"
                onClick={handlePrevPage}
                disabled={isFirstPage}
              >
                Previous
              </button>
              <span className="page-indicator">
                Page {currentPage + 1} of {Math.max(1, totalPages)}
              </span>
              <button 
                className="slider-btn"
                onClick={handleNextPage}
                disabled={isLastPage}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
