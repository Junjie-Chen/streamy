import React, { Component } from 'react';
import { Field } from 'redux-form';

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = inputValues => {
    this.props.onSubmit(inputValues);
  };

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" label="Enter Title" component={this.renderInput} />
        <Field name="description" label="Enter Description" component={this.renderInput} />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = inputValues => {
  const errors = {};

  if (!inputValues.title) {
    errors.title = 'You must enter a title.';
  }

  if (!inputValues.description) {
    errors.description = 'You must enter a description.';
  }

  return errors;
};

export default StreamForm;
