import React, { Component } from 'react';
import Modal from '../Modal';

class StreamDeletion extends Component {
  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete the stream?';
    }

    return `Are you sure you want to delete the stream: ${this.props.stream.title}?`;
  }

  render() {
    return <Modal header="Delete the Stream" content={this.renderContent()} />;
  }
}

export default StreamDeletion;
