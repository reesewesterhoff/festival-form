import React, { Component } from 'react';
import moment from 'moment';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 30000);
  }

  render() {
    return (
        <div className="nav-right nav-link">
        {moment().format('MMMM Do YYYY, h:mm a')}
        </div>
    );
  }
}

export default Blink;