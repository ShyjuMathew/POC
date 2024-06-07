import React from 'react';
import { CheckDataIsEmpty } from '../../hooks/CheckDataIsEmpty';

interface ExampleComponentProps {
  data: object;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ data }) => {
  const isEmpty = CheckDataIsEmpty(data);

  return (
    <div>
      <h1>Check Data Is Empty Hook</h1>
      <p>Is Data Empty: {isEmpty ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default ExampleComponent;
