import React, { Component } from 'react';

class StreamShow extends Component {
  target = React.createRef();

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video ref={this.target} style={{ width: '100%' }} controls></video>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

export default StreamShow;
