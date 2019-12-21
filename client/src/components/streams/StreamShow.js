import React, { Component } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  target = React.createRef();

  componentDidMount() {
    this.createPlayer();
  }

  componentDidUpdate() {
    this.createPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  createPlayer() {
    if (!this.props.stream || this.player) {
      return;
    }

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
    });

    this.player.attachMediaElement(this.target.current);

    this.player.load();
  }

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

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  fetchStream(id) {
    dispatch(fetchStream(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);
