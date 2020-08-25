import React, { Component } from 'react';
import ErrorMassage from '../error-massage';


export default class ErrorBoundary extends Component {
  state = { hasError: false }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) return <ErrorMassage />
    return this.props.children;
  }
};

