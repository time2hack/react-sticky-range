import React, { useState } from "react";

export default function RangeInput() {
  const [state, setState] = useState(false);
  return <input type="range" />;
}
