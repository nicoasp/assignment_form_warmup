import React, {Component} from 'react'
import ControlledForm from '../components/ControlledForm';
import {validateForm} from '../helpers'

class ControlledFormContainer extends Component {
  constructor() {
    super()
    this.state = {
      success: false,
      errors: {},
      exampleEmail: '',
      examplePassword: '',
      exampleURL: '',
    }
  }

  onChangeInput = (e) => {
    const data = {
      [e.target.name]: e.target.value
    }
    const errors = validateForm(data);
    this.setState({
      [e.target.name]: e.target.value,
      errors
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    const errors = validateForm(this.state)
    if (errors) {
      this.setState({errors})
    } else {
      this.formSuccess()
    }
  }

  formSuccess = () => {
    this.setState({
      success: true,
      errors: {},
      exampleEmail: '',
      examplePassword: '',
      exampleURL: '',
    }, () => console.log('Success!'))
  }

  render() {
    return (
      <ControlledForm
        onSubmit={this.onSubmit}
        onChangeInput={this.onChangeInput}
        {...this.state}
      />
    )
  }
}

export default ControlledFormContainer
