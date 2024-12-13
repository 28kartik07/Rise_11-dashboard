import React, { useState } from 'react';
import ClaimValue from './sections/ClaimValue';
import Place from './sections/Place';
import Language from './sections/Language';
import Statement from './sections/Statement';
import Documents from './sections/Documents';
import AdditionalDocs from './sections/AdditionalDocs';
import './ClaimForm.css';

function ClaimForm() {
  const [contractValue, setContractValue] = useState('10,00.00');
  const [claimValue, setClaimValue] = useState('15,00.00');

  return (
    <div className="claim-form">
      <h2>File your Claim. <span className="subtitle">Approx 5 Minutes</span></h2>

      <div className="form-sections">
        <ClaimValue
          contractValue={contractValue}
          setContractValue={setContractValue}
          claimValue={claimValue}
          setClaimValue={setClaimValue}
        />
        <Place />
        <Language />
        <Statement />
        <Documents />
        <AdditionalDocs />
      </div>
    </div>
  );
}

export default ClaimForm;