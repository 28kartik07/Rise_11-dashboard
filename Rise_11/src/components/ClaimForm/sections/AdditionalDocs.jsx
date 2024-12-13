import React from 'react';

function AdditionalDocs() {
  return (
    <section className="additional-docs">
      <h3>📎 Additional Documentation</h3>
      <div className="document-upload-area">
        <div className="upload-box">
          <label className="upload-btn">
            📤 Upload the Contract
            <input type="file" accept=".pdf" className="hidden-file-input" />
          </label>
          <p className="file-hint">Max 2MB, PDF</p>
        </div>
        <div>
          <button className="add-more">+</button>
        </div>
      </div>
    </section>
  );
}

export default AdditionalDocs;
