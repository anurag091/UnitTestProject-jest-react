import React, { Component } from "react";
import PropTypes from "prop-types";

class SharedButton extends Component {
  onClickHandler(e) {
    if (this.props.emitEvent) {
      this.props.emitEvent(e);
    }
  }
  render() {
    const { buttonText } = this.props;
    return (
      <button data-test='buttonComponent' onClick={e => this.onClickHandler(e)}>
        {buttonText}
      </button>
    );
  }
}

export default SharedButton;

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};
