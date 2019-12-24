import React from 'react';
import Session from './session';
import {TITLE_A, TITLE_B} from './clock_base'

class SetTiming extends React.Component {
  render() {
    const container = {
      display: "flex",
      width: "80%",
      marginLeft: "50px"
    };
    return (
      <div style={container}>
        <Session
          min={this.props.min}
          pause={this.props.pause}
          update={this.props.updateA}
          title={TITLE_A}
        />
        <Session
          min={this.props.minB}
          pause={this.props.pause}
          update={this.props.updateB}
          title={TITLE_B}
        />
      </div>
    );
  }
}
export default SetTiming;
