import React, { Component } from 'react'

import { ErrorMessage } from './styled'

interface IErrorBoundaryProps {
  children?: JSX.Element
}

interface IErrorBoundaryState {
  isError: boolean
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props)

    this.state = {
      isError: false,
    }
  }

  public static getDerivedStateFromError(_: Error) {
    return {
      isError: true,
    }
  }

  render() {
    const { isError } = this.state
    const { children } = this.props
    if (isError) {
      return (
        <ErrorMessage>
          Something went wrong...
          <br />
          Try reloading the page or contact the administrator.
        </ErrorMessage>
      )
    }
    return children
  }
}
