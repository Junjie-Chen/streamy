import React, { Component } from 'react';
import { Field } from 'redux-form';

class StreamForm extends Component {
  renderInput = ({ input, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
      </div>
    );
  };

  render() {
    return (
      <form className="ui form error">
        <Field name="title" label="Enter Title" component={this.renderInput} />
        <Field name="description" label="Enter Description" component={this.renderInput} />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default StreamForm;
