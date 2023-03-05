import React from 'react';
import './container.css';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};
