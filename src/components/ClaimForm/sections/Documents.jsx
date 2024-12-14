import React from 'react';

function Documents() {
  return (
    <section className="documents">
      <h3>📄 Agreement under Disputes</h3>
      <div className="document-upload-area">
        <div className="upload-box">
          <label className="upload-btn" style={{height:'5rem'}}>
            📤 Upload the Contract
            <input type="file" accept=".pdf" style={{ display: 'none' }} />
          </label>
          <p className="file-hint">Max 2MB, PDF</p>
        </div>
        <div className="upload-box">
          <label className="upload-btn" style={{height:'5rem'}}>
            📤 Arbitration Agreement
            <input type="file" accept=".pdf" style={{ display: 'none' }} />
          </label>
          <p className="file-hint">Max 2MB, PDF</p>
        </div>
      </div>
    </section>
  );
}

export default Documents;
