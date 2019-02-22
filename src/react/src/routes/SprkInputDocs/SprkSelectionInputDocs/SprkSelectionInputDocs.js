import React from 'react';
import { SprkSelectionInput } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../../containers/ExampleContainer/ExampleContainer';

function SprkSelectionInputDocs() {
  const choices = [
    {
      label: 'Item 1',
      name: 'check[]',
      value: 'item-1',
      defaultChecked: true,
    },
    {
      label: 'Item 2',
      name: 'check[]',
      value: 'item-2',
    },
  ];
  return (
    <React.Fragment>
      <ExampleContainer heading="Checkbox">
        <SprkSelectionInput groupLabel="Checkbox Input" choices={choices} variant="checkbox" />
      </ExampleContainer>
      <ExampleContainer heading="Radio">
        <SprkSelectionInput groupLabel="Radio Input" choices={choices} variant="radio" />
      </ExampleContainer>
      <ExampleContainer heading="Select">
        <SprkSelectionInput choices={choices} variant="select" />
      </ExampleContainer>
      <ExampleContainer heading="Select with Helper">
        <SprkSelectionInput choices={choices} helperText="Optional helper text." variant="select" />
      </ExampleContainer>
    </React.Fragment>
  );
}

export default SprkSelectionInputDocs;
