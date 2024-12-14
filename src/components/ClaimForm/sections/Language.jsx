import React from 'react';

function Language() {
  const radioGroupStyle = {
    display: 'flex',
    gap: '12px', // Space between Yes and No options
    marginTop: '10px',
    alignItems: 'center',
  };

  const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px', // Space between the radio button and label
    fontSize: '12px',
    color: '#333',
  };

  const radioInputStyle = {
    width: '16px',
    height: '16px',
    border: '2px solid lightgrey',
    borderRadius: '50%',
    backgroundColor: '#f5f5f5',
    cursor: 'pointer',
    appearance: 'none',
  };

  const radioInputCheckedStyle = {
    ...radioInputStyle,
    backgroundColor: '#0066ff',
    borderColor: '#0066ff',
  };

  return (
    <section className="language">
      <h3>🌐 Language</h3>
      <div className="input-group">
        <input
          type="text"
          className="place-input"
          placeholder="Select the language for proceedings"
          style={{
            width: '100%',
            marginTop: '1rem',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            backgroundColor: '#f5f8ff',
            color: '#000',
          }}
        />
      </div>
      <p>Is the language for the proceedings the one mentioned in the agreement?</p>
      <div style={radioGroupStyle}>
        <label style={labelStyle}>
          <input
            type="radio"
            name="language"
            style={radioInputStyle}
            onChange={(e) =>
              (e.target.style = e.target.checked
                ? radioInputCheckedStyle
                : radioInputStyle)
            }
          />
          Yes
        </label>
        <label style={labelStyle}>
          <input
            type="radio"
            name="language"
            style={radioInputStyle}
            onChange={(e) =>
              (e.target.style = e.target.checked
                ? radioInputCheckedStyle
                : radioInputStyle)
            }
          />
          No
        </label>
      </div>
    </section>
  );
}

export default Language;
