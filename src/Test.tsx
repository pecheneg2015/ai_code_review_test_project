import React from 'react';

export const TestComponent = ()=>{
  const test = "test console content"
           const clickFn = ()=>{console.log(test)}
  return <button onClick={clickFn}>test</button>
}
