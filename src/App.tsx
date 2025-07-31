import React, { useState } from 'react';
import './styles/globals.css';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { JobListings } from './components/JobListings';
import { CandidateDashboard } from './components/CandidateDashboard';
import { RecruiterDashboard } from './components/RecruiterDashboard';
import { MatchResults } from './components/MatchResults';

type Page = 'home' | 'jobs' | 'candidate-dashboard' | 'recruiter-dashboard' | 'matches';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [userType, setUserType] = useState<'candidate' | 'recruiter' | null>(null);

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
  };

  const handleUserTypeSelect = (type: 'candidate' | 'recruiter') => {
    setUserType(type);
    if (type === 'candidate') {
      setCurrentPage('candidate-dashboard');
    } else {
      setCurrentPage('recruiter-dashboard');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onUserTypeSelect={handleUserTypeSelect} onNavigate={handleNavigation} />;
      case 'jobs':
        return <JobListings onNavigate={handleNavigation} />;
      case 'candidate-dashboard':
        return <CandidateDashboard onNavigate={handleNavigation} />;
      case 'recruiter-dashboard':
        return <RecruiterDashboard onNavigate={handleNavigation} />;
      case 'matches':
        return <MatchResults onNavigate={handleNavigation} userType={userType} />;
      default:
        return <LandingPage onUserTypeSelect={handleUserTypeSelect} onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={handleNavigation}
        userType={userType}
        onUserTypeSelect={handleUserTypeSelect}
      />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}