import React, { Component } from 'react';

class FestivalItem extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <tr>
                <td>{this.props.festival.name}</td>
                <td>{this.props.festival.date}</td>
                <td>{this.props.festival.address}</td>
                <td>
                    <img src={this.props.festival.image} height="200" />
                </td>
                {
                    this.props.id === 1 ?
                    <>
                        <td>
                            <button onClick={() => this.props.reviewFestival(this.props.festival)}>Review</button>
                        </td>
                        <td>
                            <button onClick={() => this.props.deleteFestival(this.props.festival.id)}>Delete Festival</button>
                        </td>
                    </>
                        :
                        <td>
                            <button onClick={() => this.props.respondToFestival(this.props.festival)}>RSVP</button>
                        </td>

                }
            </tr>
        );
    }
}

export default FestivalItem;