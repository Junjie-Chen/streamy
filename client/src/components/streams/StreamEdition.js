import React, { Component } from 'react';

class StreamEdition extends Component {
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return <div>Stream Edition</div>;
  }
}

export default StreamEdition;
