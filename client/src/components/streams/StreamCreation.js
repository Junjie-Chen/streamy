import React, { Component } from 'react';
import StreamForm from './StreamForm';

class StreamCreation extends Component {
  onSubmit = () => {};

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default StreamCreation;
