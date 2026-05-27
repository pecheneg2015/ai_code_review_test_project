import React from 'react';

export const TestComponent = ()=>{
  const test = "test console content"
           const btnClck  = ()=>{console.log(test)}
  return <button onClick={btnClck}>test</button>
}
