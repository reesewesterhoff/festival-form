import React, { Component } from 'react';
import { connect } from 'react-redux';

class FestivalRespondents extends Component {

    componentDidMount() {
        
    }

    render() {

        let fest = this.props.festToRespond;

        return (
            <div>
                FestivalDetail
                {fest.id ? 
                <ul>
                    <li>{fest.name}</li>
                    <li>{fest.date}</li>
                    <li>{fest.address}</li>
                    <li>
                        <img src={fest.image} height="200" />
                    </li>
                </ul>
                : null }
                <br />
                <hr />
                <br />
                <table>
                    
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        state,
        festToRespond: state.festToRespond, 
    }
}

export default connect(mapStateToProps)(FestivalRespondents);