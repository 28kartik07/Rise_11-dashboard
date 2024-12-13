import React from 'react';
import './ProgressBar.css';

function ProgressBar() {
  const steps = [
    { number: '01', label: 'Preliminary', status: 'completed' },
    { number: '02', label: 'Your Details', status: 'completed' },
    { number: '03', label: 'KYC', status: 'current' },
    { number: '04', label: 'Parties', status: 'pending' },
    { number: '05', label: 'Claim', status: 'pending' },
    { number: '06', label: 'Review', status: 'pending' },
    { number: '07', label: 'Payment', status: 'pending' }
  ];

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div key={index} className={`step ${step.status}`}>
          <div className="step-number">{step.number}</div>
          <div className="step-label">{step.label}</div>
          <div className="step-time">{step.status !== 'completed' && '(Approx 5 Min)'}</div>
          <div className="connector"></div>
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;