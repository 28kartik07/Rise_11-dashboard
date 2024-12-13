import React from 'react';

function Language() {
  return (
    <section className="language">
      <h3>🌐 Language</h3>
      <div className="input-group">
        <input type="text" className="place-input" placeholder="Select the language for proceedings" />
      </div>
      <p>Is the language for the proceedings the one mentioned in the agreement?</p>
      <div className="radio-group">
        <label>
          <input type="radio" name="language" />
          Yes
        </label>
        <label>
          <input type="radio" name="language" />
          No
        </label>
      </div>
    </section>
  );
}

export default Language;