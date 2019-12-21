import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StreamList extends Component {
  renderEditAndDeleteButtons(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>Edit</Link>
          <Link className="ui button negative" to={`/streams/delete/${stream.id}`}>Delete</Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderEditAndDeleteButtons(stream)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            <Link className="header" to={`/streams/${stream.id}`}>{stream.title}</Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

export default StreamList;
