import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchBandInfo(action) {
    console.log('saga side get', action.payload);
    
    try {
        const elementResponse = yield call(axios.get, `/api/band`, {id: action.payload} );
        yield put({type: 'SET_BAND_INFO', payload: elementResponse.data});
    } catch (error) {
        console.log('Error getting band info', error);
    }
}

function* addBandInfo(action) {
    console.log('post request', action.payload);
    try {
        yield call(axios.post, '/api/band', action.payload);
    } catch (error) {
        console.log('Error posting new band info', error);
    }
}

function* bandInfoSaga() {
    yield takeLatest('FETCH_BAND_INFO', fetchBandInfo);
    yield takeLatest('ADD_BAND_INFO', addBandInfo);
  }


  
  export default bandInfoSaga;