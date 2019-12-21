import React, { Component } from 'react';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
import { createStream } from '../../actions';

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

const mapDispatchToProps = dispatch => ({
  createStream(inputValues) {
    dispatch(createStream(inputValues));
  }
});

export default connect(null, mapDispatchToProps)(StreamCreation);
