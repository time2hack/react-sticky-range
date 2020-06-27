import React, { useState, createRef } from 'react';

const displayValue = value => {
  const separator = ':';
  let suffix = '00';
  if (value !== Math.floor(+value)) {
    suffix = '30';
  }
  return [
    Math.floor(+value),
    separator,
    suffix
  ].join('');
}

export function Step() {
  const [value, setValue] = useState(10)
  const inputRef = createRef();
  return (
    <div className="input-container">
      <span>Type 3:</span>
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
      <span>{displayValue(value)}</span>
    </div>
  );
}

export default Step;
