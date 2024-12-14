import React from 'react';

function ClaimValue({ contractValue, setContractValue, claimValue, setClaimValue }) {
  return (
    <section className="claim-value">
      <h3>📊 Claim Value</h3>
      <div className="input-group">
        <label>Contract Value</label>
        <div className="currency-input">
          <input type="text" value={contractValue} onChange={(e) => setContractValue(e.target.value)}/>
          <select defaultValue="" style={{color:'black'}}>
            <option value="" disabled>USD</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CNY">CNY</option>
          </select>
        </div>
      </div>
      <div className="input-group">
        <label>Claim Value</label>
        <div className="currency-input">
          <input type="text" value={claimValue} onChange={(e) => setClaimValue(e.target.value)} />
          <select defaultValue="" style={{color:'black'}}>
            <option value="" disabled>USD</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CNY">CNY</option>
          </select>
        </div>
        <div className="hint">150% of Contract Value</div>
      </div>
    </section>
  );
}

export default ClaimValue;