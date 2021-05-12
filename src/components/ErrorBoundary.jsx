import React, { Component } from 'react';
import ErrorGeneral from './ErrorGeneral';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: ''
    }
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      errorMessage: error.message
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorGeneral errorMessage={this.state.errorMessage} />
    }
    return this.props.children;
  }
}

export default ErrorBoundary;