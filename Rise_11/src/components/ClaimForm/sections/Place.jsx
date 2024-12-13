import React from 'react';

function Place() {
  return (
    <section className="place">
      <h3>📍 Place</h3>
      <div className="input-group">
        <input type="text" className="place-input" placeholder="Select the place here" />
      </div>
      <p>Is the place for the proceedings the one mentioned in the agreement?</p>
      <div className="radio-group">
        <label>
          <input type="radio" name="place" />
          Yes
        </label>
        <label>
          <input type="radio" name="place" />
          No
        </label>
      </div>
    </section>
  );
}

export default Place;