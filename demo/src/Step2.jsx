import React, { useState, createRef } from 'react';

export function Step2() {
  const [value, setValue] = useState(10)
  const inputRef = createRef();
  return (
    <div className="input-container">
      <span>Type 2:</span>
      <span>
        <input
          type="range"
          min="9.0"
          max="17.0"
          ref={inputRef}
          step="0.5"
          value={value}
          onChange={() => setValue(+((inputRef.current || {}).value || 0))}
        />
      </span>
      <span>{value}</span>
    </div>
  );
}

export default Step2;
