import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import '../../../device.post.css';

export default class HTC extends Component {
  static propTypes = {
    model: PropTypes.oneOf(['htc-one']),
    landscape: PropTypes.bool,
    screen: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array
    ])
  };

  static defaultProps = {
    model: 'htc-one',
    landscape: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { model, landscape } = this.props;

    const classes = classNames({
      'marvel-device': true,
      'htc-one': model === 'htc-one',
      landscape: landscape
    });

    return (
      <div class={classes}>
        <div class="top-bar"></div>
        <div class="camera"></div>
        <div class="sensor"></div>
        <div class="speaker"></div>
        <div class="screen">
          {this.props.screen}
        </div>
      </div>
    );
  }
};