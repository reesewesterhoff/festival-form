import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

// function* fetchFestivalBandInfo(action) {
//     try {
//         const elementResponse = yield call(axios.get, `/api/band`, {id: action.payload} );
//         yield put({type: 'SET_BAND_INFO', payload: elementResponse.data});
//     } catch (error) {
//         console.log('Error getting band info', error);
//     }
// }

function* addFestivalBandInfo(action) {
    console.log('post request fest_band_info', action.payload);
    try {
        yield call(axios.post, '/api/fest_band_info', action.payload);
        // yield put({type: 'FETCH_BAND_INFO'});
    } catch (error) {
        console.log('Error posting new fest_band_info', error);
    }
}

function* festivalBandInfoSaga() {
    // yield takeLatest('FETCH_BAND_INFO', fetchBandInfo);
    yield takeLatest('ADD_RESPONSE', addFestivalBandInfo);
  }


  
  export default festivalBandInfoSaga;