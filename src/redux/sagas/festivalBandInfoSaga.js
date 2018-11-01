import { put, takeLatest, call } from 'redux-saga/effects';
// for axios requests
import axios from 'axios';

// handles fetching festival respondents
function* fetchFestRespondents(action) { 
    try {
        // get any rows from fest band info table that have the specific clicked festival id
        const elementResponse = yield call(axios.get, `/api/fest_band_info/${action.payload}` );
        // dispatch action to set the respondents to the response from the database
        yield put({type: 'SET_RESPONDENTS', payload: elementResponse.data});
    } catch (error) {
        console.log('Error getting band info', error);
    }
}

// handles a respondent RSVPing to a festival
function* addFestivalBandInfo(action) {
    try {
        // posts users information to fest band info table
        yield call(axios.post, '/api/fest_band_info', action.payload);
        // yield put({type: 'FETCH_BAND_INFO'});
    } catch (error) {
        console.log('Error posting new fest_band_info', error);
    }
}

// handles deleting a festival respondent
function* deleteRespondent(action) {
    try {
        // find respondent by id and delete them from table
        yield call(axios.delete, `/api/fest_band_info/delete/${action.payload.id}`);
        // refreshes list of respondents
        yield put({type: 'FETCH_FEST_RESPONDENTS', payload: action.payload.festival_id});
    } catch (error) {
        console.log('Error deleting festival respondent', error);
    }
}

// handles incoming actions and directs them to the appropriate generator function
function* festivalBandInfoSaga() {
    yield takeLatest('FETCH_FEST_RESPONDENTS', fetchFestRespondents);
    yield takeLatest('ADD_RESPONSE', addFestivalBandInfo);
    yield takeLatest('DELETE_RESPONDENT', deleteRespondent);
}


  
export default festivalBandInfoSaga;