import React, { useState, createRef } from 'react';

export function Step() {
  const [value, setValue] = useState(930)
  const inputRef = createRef();
  return (
    <div className="input-container">
      <span>Type 1:</span>
      <span>
        <input
          type="range"
          min="900"
          max="1700"
          ref={inputRef}
          step="30"
          value={value}
          onChange={() => setValue(+((inputRef.current || {}).value || 0))}
        />
      </span>
      <span>{value}</span>
    </div>
  );
}

export default Step;
