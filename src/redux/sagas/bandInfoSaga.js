import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchBandInfo(action) {
    try {
        const elementResponse = yield call(axios.get, `/api/band`, {id: action.payload} );
        yield put({type: 'SET_BAND_INFO', payload: elementResponse.data});
    } catch (error) {
        console.log('Error getting band info', error);
    }
}

function* addBandInfo(action) {
    try {
        yield call(axios.post, '/api/band', action.payload);
        yield put({type: 'FETCH_BAND_INFO'});
    } catch (error) {
        console.log('Error posting new band info', error);
    }
}

function* updateBandInfo(action) {
    console.log('update', action.payload);
    try {
        yield call(axios.put, `/api/band/${action.payload.id}`, action.payload);
        yield put({type: 'FETCH_BAND_INFO'});
    } catch (error) {
        console.log('Error updating band information', error);
    }
}

function* bandInfoSaga() {
    yield takeLatest('FETCH_BAND_INFO', fetchBandInfo);
    yield takeLatest('ADD_BAND_INFO', addBandInfo);
    yield takeLatest('UPDATE_BAND_INFO', updateBandInfo);
  }


  
  export default bandInfoSaga;