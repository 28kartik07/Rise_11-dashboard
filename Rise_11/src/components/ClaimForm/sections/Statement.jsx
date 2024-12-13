import React from 'react';

function Statement() {
  return (
    <section className="statement">
      <h3>📝 Statement</h3>
      <div className="upload-box">
        <p>Write your Statement Here</p>
        <p style={{marginBottom: '1rem'}}>or</p>
        <label className="upload-btn">
          📤 Upload a Pdf
          <input type="file" accept=".pdf" style={{ display: 'none' }} />
        </label>
      </div>
    </section>
  );
}

export default Statement;
