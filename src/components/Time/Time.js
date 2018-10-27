import React, { Component } from 'react';
import moment from 'moment';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every 30 seconds
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 30000);
  }

  render() {
    return (
      <div className="nav-right">
        <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" >{moment().format('MMMM Do YYYY, h:mm a')}</a>
      </div>
    );
  }
}

export default Blink;