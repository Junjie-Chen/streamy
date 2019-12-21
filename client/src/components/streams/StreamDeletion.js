import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';

class StreamDeletion extends Component {
  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <Link className="ui button" to="/">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete the stream?';
    }

    return `Are you sure you want to delete the stream: ${this.props.stream.title}?`;
  }

  render() {
    return <Modal header="Delete the Stream" content={this.renderContent()} actions={this.renderActions()} />;
  }
}

export default StreamDeletion;
