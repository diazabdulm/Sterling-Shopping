import React from "react";

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageTitle,
  ErrorImageSubtitle
} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/hkRuanu.png" />
          <ErrorImageTitle>This page is not real</ErrorImageTitle>
          <ErrorImageSubtitle>
            The imposing figure with the trenchcoat shows you the two polaroids.
            One appears to show the Loch Ness monster herself in the middle of a
            stretch of dark water. The other shows a sasquatch picking it’s way
            through a dark forest. You look closer. The animal shapes are drawn
            on with ink. “This isn’t real!” You scream and throw the polaroids
            to the floor, sobbing.
          </ErrorImageSubtitle>
        </ErrorImageOverlay>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
