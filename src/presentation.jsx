import React from 'react';
import ClockBase from './clock_base';

class Presentation extends React.Component {
  render() {
    const bodyBackground = {
      backgroundColor: "#FF7707"
    };
    return (
      <body style={bodyBackground}>
        <ClockBase />
      </body>
    );
  }
}

export default Presentation;
