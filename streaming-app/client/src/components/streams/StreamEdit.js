import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'


class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = (formProps) => {
    this.props.editStream(this.props.match.params.id, formProps)
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')} //using "_.pick()" in order to only send title nd desc. 
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)