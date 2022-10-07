import React from 'react';
import './style.css';

export const Title = ({text}) => {
  return (
    <>
      <div class="titulo">
        <h1>{text}</h1>
      </div>
    </>
  );
}
