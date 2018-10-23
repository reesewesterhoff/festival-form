import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchFestRespondents(action) {
    try {
        const elementResponse = yield call(axios.get, `/api/fest_band_info`, {id: action.payload} );
        yield put({type: 'SET_RESPONDENTS', payload: elementResponse.data});
    } catch (error) {
        console.log('Error getting band info', error);
    }
}

function* addFestivalBandInfo(action) {
    try {
        yield call(axios.post, '/api/fest_band_info', action.payload);
        // yield put({type: 'FETCH_BAND_INFO'});
    } catch (error) {
        console.log('Error posting new fest_band_info', error);
    }
}

function* festivalBandInfoSaga() {
    yield takeLatest('FETCH_FEST_RESPONDENTS', fetchFestRespondents);
    yield takeLatest('ADD_RESPONSE', addFestivalBandInfo);
  }


  
  export default festivalBandInfoSaga;