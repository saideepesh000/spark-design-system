import React, { Component } from 'react';
import { SprkRevealInput } from '@sparkdesignsystem/spark-core-react';
import { isValidSSN, formatSSN } from '@sparkdesignsystem/spark-core/es5/sparkCoreExports';
import ExampleContainer from '../../../containers/ExampleContainer/ExampleContainer';

class SprkRevealInputDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ssn: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { ssn } = this.state;
    return (
      <React.Fragment>
        <ExampleContainer heading="Password Entry">
          <SprkRevealInput label="Password" toggleLabel="Show Password" name="password-1" />
        </ExampleContainer>
        <ExampleContainer heading="SSN">
          <SprkRevealInput
            formatter={formatSSN}
            valid={isValidSSN(ssn)}
            value={ssn}
            onChange={this.handleChange}
            label="Social Security Number"
            toggleLabel="Show SSN"
            name="ssn"
          />
        </ExampleContainer>
      </React.Fragment>
    );
  }
}

export default SprkRevealInputDocs;
