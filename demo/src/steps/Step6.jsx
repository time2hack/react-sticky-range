import React, { useState, createRef } from 'react';

const displayValue = _value => {
  const separator = ':';
  const value = Number(_value)
  const hours = Math.floor(value)
  const fraction = value - hours;
  let suffix = Math.round(60 * fraction);
  return [
    hours,
    separator,
    suffix < 10 ? '0' : '', // 0 padding for single digits
    suffix
  ].join('');
}

export function Step() {
  const [value, setValue] = useState(10)
  const inputRef = createRef();
  return (
    <div className="input-container">
      <span>Type 6:</span>
      <span>
        <input
          type="range"
          min="9.0"
          max="17.0"
          ref={inputRef}
          step="0.01"
          value={value}
          onChange={() => setValue(+((inputRef.current || {}).value || 0))}
        />
      </span>
      <span>{displayValue(value)}</span>
    </div>
  );
}

export default Step;
