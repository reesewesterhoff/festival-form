import React, { Component } from 'react';
// handles time format
import moment from 'moment';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      refresh: true 
    };

    // Toggle the state every 30 seconds
    setInterval(() => {
      this.setState(previousState => {
        return { refresh: !previousState.refresh };
      });
    }, 30000);
  }

  render() {
    return (
      <div className="nav-right">
        <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noopener noreferrer">{moment().format('MMMM Do YYYY, h:mm a')}</a>
      </div>
    );
  }
}

export default Time;