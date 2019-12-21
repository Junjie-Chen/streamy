import React, { Component } from 'react';

class StreamShow extends Component {
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title } = this.props.stream;

    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default StreamShow;
