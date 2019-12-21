import React, { Component } from 'react';
import _ from 'lodash';
import StreamForm from './StreamForm';

class StreamEdition extends Component {
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} />
      </div>
    );
  }
}

export default StreamEdition;
