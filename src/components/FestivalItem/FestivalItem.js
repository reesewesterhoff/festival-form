import React, { Component } from 'react';

class FestivalItem extends Component {

    render() {
        return(
            <tr>
                <td>{this.props.festival.name}</td>
                <td>{this.props.festival.date}</td>
                <td>{this.props.festival.address}</td>
                <td>
                    <img src={this.props.festival.image} height="200" />
                </td>
                <td>
                    <button>RSVP</button>
                </td>
            </tr>
        );
    }
}

export default FestivalItem;