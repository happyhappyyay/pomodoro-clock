import React from 'react';

const MS_MIN = 60000;
function msToMin(ms) {
  if (ms === 3600000) {
    return 60;
  }
  let min = parseInt((ms / MS_MIN) % 60);
  return min < 10 ? "0" + min : min;
}

function msToSec(ms) {
  let sec = parseInt((ms / 1000) % 60);
  return sec < 10 ? "0" + sec : sec;
}

function msToMMSS(ms) {
  return msToMin(ms) + ":" + msToSec(ms);
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pause: true
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleReplay = this.handleReplay.bind(this);
  }
  handleReplay(e) {
    this.setState({
      pause: true
    });
    this.props.reset();
  }
  handleOnClick(e) {
    this.update();
  }
  passOneSecond() {
    if (!this.state.pause) {
      this.props.updateTime(this.props.time - 1000);
    }
  }
  update() {
    this.setState({
      pause: !this.state.pause
    });
    this.props.updatePause(!this.state.pause);
  }
  componentDidMount() {
    let intervalId = setInterval(this.passOneSecond.bind(this), 1000);
    this.setState({ intervalId: intervalId });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  render() {
    const container = {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "50%",
      alignItems: "center"
    };
    const headerText = {
      color: "#401ABA",
      fontSize: "35px"
    };
    const clockText = {
      color: "#401ABA",
      fontSize: "50px"
    };
    const button = {
      margin: "0 10px",
      marginTop: "30px",
      backgroundColor: "#2F0F95",
      color: "#ffffff",
      fontSize: "35px",
      borderRadius: "15%",
      width: "60px",
      textAlign: "center"
    };
    const buttonContainer = {
      display: "flex"
    };
    return (
      <div style={container}>
        <h2 style={headerText} id="timer-label">
          {this.props.title}
        </h2>
        <div style={clockText} id="time-left">
          {msToMMSS(this.props.time)}
        </div>
        <div style={buttonContainer}>
          <div style={button} id="start_stop" onClick={this.handleOnClick}>
            &#9658;||
          </div>
          <div style={button} id="reset" onClick={this.handleReplay}>
            &#8635;
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
