import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createStream } from '../../actions'

class StreamCreate extends React.Component {
  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      )
    }

  }

  renderInput = (formProps) => {
    const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        {this.renderError(formProps.meta)}
      </div>
    )
  }

  onSubmit = (formProps) => {
    this.props.createStream(formProps)
  }

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Title"
        />

        <Field
          name="description"
          component={this.renderInput}
          label="Enter Descrtiption"
        />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

// validate values entered in the from
const validate = formValues => {
  const errors = {}

  if (!formValues.title) {
    errors.title = 'Must enter a title'
  }

  if (!formValues.description) {
    errors.description = 'Must enter a description'
  }

  return errors
}

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate)

export default connect(null, { createStream })(formWrapped)