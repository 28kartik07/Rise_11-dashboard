import React from 'react';
import Sidebar from './components/Sidebar';
import ProgressBar from './components/ProgressBar';
import ClaimForm from './components/ClaimForm/ClaimForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <header className="header">
          <div className="notifications">🔔</div>
          <div className="user-profile">👤</div>
        </header>
        <ProgressBar />
        <ClaimForm />
      </main>
    </div>
  );
}

export default App;