import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditBandInfo from '../EditBandInfo/EditBandInfo';
import UppyModal from '../UppyModal/UppyModal';

class BandInfoForm extends Component {

    state = {
        name: '',
        tech_rider: '',
        band_rider: '',
        stage_plot: '',
        input_list: '',
        person_id: this.props.user.id,
    }

    handleChangeFor = propertyName => event => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.dispatch({ type: 'ADD_BAND_INFO', payload: this.state });
        this.setState({
            state: {
                name: '',
                tech_rider: '',
                band_rider: '',
                stage_plot: '',
                input_list: '',
            }
        });

    };

    handleUploadInput = ( uploadURL ) => {
        console.log( uploadURL );
        this.setState( {
            newInfoUpload: {
                ...this.state.newInfoUpload,
                path: uploadURL,
            }
        } )
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_BAND_INFO', payload: this.props.user.id });
    }



    render() {
        return (
            <div>
                {this.props.band_info.id ?
                    <>
                        <EditBandInfo />
                    </>
                    :
                    <>
                        <h2>Please enter current band information.</h2>
                        <form onSubmit={this.handleSubmit}>
                            <label> Band Name
                        <input type="text" value={this.state.name} onChange={this.handleChangeFor('name')} />
                            </label>
                            <br />
                            <label> Tech Rider
                        <textarea type="text" value={this.state.tech_rider} onChange={this.handleChangeFor('tech_rider')} />
                            </label>
                            <br />
                            <label> Hospitality Rider
                        <textarea type="text" value={this.state.band_rider} onChange={this.handleChangeFor('band_rider')} />
                            </label>
                            <br />
                            <label> Stage Plot
                        <textarea type="text" value={this.state.stage_plot} onChange={this.handleChangeFor('stage_plot')} />
                            </label>
                            <br />
                            <label> Input List
                        <textarea type="text" value={this.state.input_list} onChange={this.handleChangeFor('input_list')} />
                            </label>
                            <br />
                            <input type="submit" value="Submit" />
                        </form>
                        <hr />
                    </>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        band_info: state.band_info,
    }
}

export default connect(mapStateToProps)(BandInfoForm);