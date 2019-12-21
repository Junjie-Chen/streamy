import React, { Component } from 'react';

class StreamEdition extends Component {
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
      </div>
    );
  }
}

export default StreamEdition;
