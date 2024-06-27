import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import RequestPage from './pages/RequestPage';
import StatusPage from './pages/StatusPage';
import FeaturePage from './pages/FeaturePage';
import { NotificationProvider } from './context/NotificationContext';

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <div className="container mx-auto block">
        <Router>
          <Navbar />
          <div className="main">
            <Routes>
              <Route path="/request" element={<RequestPage />} />
              <Route path="/status" element={<StatusPage />} />
              <Route path="/feature" element={<FeaturePage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </NotificationProvider>
  );
};

export default App;