import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import StreamForm from './StreamForm';

class StreamEdition extends Component {
  onSubmit = () => {};

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps)(StreamEdition);
