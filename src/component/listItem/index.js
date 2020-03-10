import React, { Component } from "react";
import PropTypes from "prop-types";

class ListItem extends Component {
  render() {
    const { title, desc } = this.props;
    return (
      <div data-test='lc'>
        <h2 data-test='ct'>{title}</h2>
        <div data-test='cd'>{desc}</div>
      </div>
    );
  }
}

export default ListItem;

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};
