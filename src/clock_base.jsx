import React from 'react';
import Clock from './clock';
import SetTiming from './set_timing';

export const TITLE_A = "Session";
export const TITLE_B = "Break";

class ClockBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 1500000,
      min: 1500000,
      minB: 300000,
      title: TITLE_A,
      pause: true
    };
    this.reset = this.reset.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.updatePause = this.updatePause.bind(this);
    this.updateMin = this.updateMin.bind(this);
    this.updateMinB = this.updateMinB.bind(this);
  }
  updatePause(pause) {
    this.setState({
      pause: pause
    });
  }
  reset() {
    this.setState({
      time: 1500000,
      min: 1500000,
      minB: 300000,
      title: TITLE_A,
      pause: true
    });
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
  }
  updateMin(time) {
    if (this.state.title === TITLE_A) {
      this.setState({
        min: time,
        time: time
      });
    } else {
      this.setState({
        min: time
      });
    }
  }

  updateMinB(time) {
    if (this.state.title === TITLE_B) {
      this.setState({
        minB: time,
        time: time
      });
    } else {
      this.setState({
        minB: time
      });
    }
  }
  updateTime(time) {
    if (time >= 0) {
      this.setState({
        time: time
      });
      if (time === 0) {
        document.getElementById("beep").play();
      }
    } else {
      if (this.state.title === TITLE_A) {
        this.setState({
          title: TITLE_B,
          time: this.state.minB
        });
      } else {
        this.setState({
          title: TITLE_A,
          time: this.state.min
        });
      }
    }
  }
  render() {
    const background = {
      display: "flex",
      flexDirection: "column",
      width: "500px",
      height: "500px",
      position: "absolute",
      backgroundColor: "#FFAB66",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      borderRadius: "20%",
      boxShadow: "5px 5px 5px rgba(0, 0, 0, .3)"
    };

    const textStyle = {
      textAlign: "center",
      fontSize: "50px",
      color: "#401ABA",
      textShadow: "3px 3px 1px rgba(0, 0, 0, .3)"
    };
    return (
      <div style={background}>
        <h1 style={textStyle}>Pomodoro Clock</h1>
        <audio
          className="clip"
          id="beep"
          src="https://www.pacdv.com/sounds/interface_sound_effects/beep-14.wav"
        />
        <SetTiming
          minB={this.state.minB}
          min={this.state.min}
          pause={this.state.pause}
          updateA={this.updateMin}
          updateB={this.updateMinB}
          title={this.state.title}
        />
        <Clock
          reset={this.reset}
          updateTime={this.updateTime}
          updatePause={this.updatePause}
          title={this.state.title}
          time={this.state.time}
        />
      </div>
    );
  }
}
export default ClockBase;
