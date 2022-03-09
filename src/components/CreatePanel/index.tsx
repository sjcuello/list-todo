import * as React from 'react';
import Card from '../Card';

interface ICreatePanelProps {
}

const CreatePanel: React.FunctionComponent<ICreatePanelProps> = (props) => {
  return (
    <>
      <Card />
      <Card />
    </>
  );
};

export default CreatePanel;
