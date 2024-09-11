import React from 'react';

interface MyComponentProps {
  // Define properties here
  text: string;
  number: number;
  isActive: boolean;
}

const MyComponent: React.FC<MyComponentProps> = ({ text, number, isActive }) => {
  return (
    <div>
      lord baldomero
    </div>
  );
};

export default MyComponent;
