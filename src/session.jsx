import React from 'react';
import TimeController from './time_controller';
import {TITLE_A} from './clock_base'

export const MS_MIN = 60000;

function msToMinNoZero(ms) {
  if (ms === 3600000) {
    return 60;
  }
  let min = parseInt((ms / MS_MIN) % 60);
  return min < 10 ? min : min;
}

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.updateMin = this.updateMin.bind(this);
  }
  updateMin(ms) {
    this.props.update(this.props.min + ms);
  }
  render() {
    const container = {
      display: "flex",
      flexDirection: "column",
      fontSize: "35px",
      width: "50%",
      textAlign: "center",
      color: "#401ABA",
      marginTop: "-5px"
    };
    return (
      <h3
        style={container}
        id={this.props.title === TITLE_A ? "session-label" : "break-label"}
      >
        <em>{this.props.title}</em>
        <TimeController
          pause={this.props.pause}
          update={this.updateMin}
          min={msToMinNoZero(this.props.min)}
          title={this.props.title}
        />
      </h3>
    );
  }
}

export default Session;
