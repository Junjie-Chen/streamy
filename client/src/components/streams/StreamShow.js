import React, { Component } from 'react';

class StreamShow extends Component {
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return <div>Stream Show</div>;
  }
}

export default StreamShow;
