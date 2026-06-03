import React, { useState } from 'react';

const btnClck = () => {
  console.log('clicked');
};

export const Button = (props) => {
  const [data, setData] = useState(null);

  return (
    <button onClick={btnClck}>
      <img src="icon.png" />
    </button>
  );
};
