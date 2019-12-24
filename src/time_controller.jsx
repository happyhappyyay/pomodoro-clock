import React from 'react';
import {MS_MIN} from './session'
import { TITLE_A } from './clock_base';

class TimeController extends React.Component {
  constructor(props) {
    super(props);
    this.handleDownClick = this.handleDownClick.bind(this);
    this.handleUpClick = this.handleUpClick.bind(this);
  }

  handleDownClick(e) {
    if ((this.props.min > 1) & this.props.pause) {
      this.props.update(-MS_MIN);
    }
  }

  handleUpClick(e) {
    if ((this.props.min < 60) & this.props.pause) {
      this.props.update(MS_MIN);
    }
  }
  render() {
    const row = {
      display: "flex",
      marginLeft: "20%"
    };
    const button = {
      backgroundColor: "#2F0F95",
      borderRadius: "15%",
      width: "30px",
      color: "#ffffff",
      margin: "0 5px"
    };
    return (
      <div style={row}>
        <div
          style={button}
          id={
            this.props.title === TITLE_A ? "session-increment" : "break-increment"
          }
          onClick={this.handleUpClick}
        >
          +
        </div>
        <div
          id={this.props.title === TITLE_A ? "session-length" : "break-length"}
        >
          {this.props.min}
        </div>
        <div
          style={button}
          id={
            this.props.title === TITLE_A ? "session-decrement" : "break-decrement"
          }
          onClick={this.handleDownClick}
        >
          -
        </div>
      </div>
    );
  }
}

export default TimeController;
