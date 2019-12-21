import React, { Component } from 'react';
import { Field } from 'redux-form';

class StreamForm extends Component {
  renderInput = inputProps => {
    return (
      <div className="field">
        <label>{inputProps.label}</label>
        <input value={inputProps.input.value} onChange={inputProps.input.onChange} autoComplete="off" />
      </div>
    );
  };

  render() {
    return (
      <form className="ui form error">
        <Field name="title" label="Enter Title" component={this.renderInput} />
      </form>
    );
  }
}

export default StreamForm;
