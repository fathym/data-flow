import React, { Component } from 'react';
import PropTypes from 'prop-types';

//https://codesandbox.io/s/outside-alerter-react-16-3-0-bn267m?file=/src/OutsideAlerter.js:0-928

/**
 * Component that alerts if you click outside of it
 */
export default class OutsideAlerter extends Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (
      this.wrapperRef &&
      !this.wrapperRef.current.contains(event.target) &&
      this.props?.onOutsideClick
    ) {
      this.props.onOutsideClick();
    }
  }

  render() {
    return <div ref={this.wrapperRef}>{this.props.children}</div>;
  }
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};
