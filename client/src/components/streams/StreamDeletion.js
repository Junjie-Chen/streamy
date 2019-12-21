import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import { fetchStream, deleteStream } from '../../actions';
import history from '../../history';

class StreamDeletion extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onClick = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button negative" onClick={this.onClick}>Delete</button>
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
    return <Modal header="Delete the Stream" content={this.renderContent()} actions={this.renderActions()} onDismiss={() => history.push('/')} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  fetchStream(id) {
    dispatch(fetchStream(id));
  },
  deleteStream(id) {
    dispatch(deleteStream(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamDeletion);
