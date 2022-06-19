/* eslint-disable react/destructuring-assignment */
import React, { PropsWithChildren, ReactNode } from 'react';
import ErrorFallback from './ErrorFallback';

export default class ErrorBoundary extends React.Component<any, { error: any; errorInfo: any }> {
  constructor(props: PropsWithChildren<any>) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any): void {
    this.setState({
      error,
      errorInfo,
    });
    console.error(this.state);
  }

  render(): ReactNode {
    if (this.state.errorInfo) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
