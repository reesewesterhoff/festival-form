import { put, takeLatest, call } from 'redux-saga/effects';
// to make axios calls
import axios from 'axios';

// handles axios call to database for a users band information
function* fetchBandInfo(action) {
    try {
        const elementResponse = yield call(axios.get, `/api/band`, {id: action.payload} );
        // upon receiving a response from the database, dispatch action to set the user's 
        // band info to the response from database
        yield put({type: 'SET_BAND_INFO', payload: elementResponse.data});
    } catch (error) {
        console.log('Error getting band info', error);
    }
}

// handles a new user adding band information
function* addBandInfo(action) {
    try {
        // axios post with new information
        yield call(axios.post, '/api/band', action.payload);
        // fetch and set user's band info so it is immediately available
        yield put({type: 'FETCH_BAND_INFO'});
    } catch (error) {
        console.log('Error posting new band info', error);
    }
}

// handles any updates to a user's band information
function* updateBandInfo(action) {
    try {
        // find user's band info by id and then set information to whatever user input on DOM
        yield call(axios.put, `/api/band/${action.payload.id}`, action.payload);
        // fetch and set band info so updated info is available immediately
        yield put({type: 'FETCH_BAND_INFO'});
    } catch (error) {
        console.log('Error updating band information', error);
    }
}

// handles incoming actions and directs them to the appropriate generator function
function* bandInfoSaga() {
    yield takeLatest('FETCH_BAND_INFO', fetchBandInfo);
    yield takeLatest('ADD_BAND_INFO', addBandInfo);
    yield takeLatest('UPDATE_BAND_INFO', updateBandInfo);
}


export default bandInfoSaga;