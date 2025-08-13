import React from 'react';

interface HelloProps {
  name?: string;
}

export const Hello: React.FC<HelloProps> = ({ name = 'World' }) => {
  return <h2>Hello, {name}!</h2>;
};

export default Hello;
