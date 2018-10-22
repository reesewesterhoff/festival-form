import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

// function* fetchBandInfo(action) {
//     try {
//         const elementResponse = yield call(axios.get, '/api/band');
//         yield put({type: 'SET_BAND_INFO', payload: elementResponse.data});
//     } catch (error) {
//         console.log('Error getting festivals', error);
//     }
// }

function* addBandInfo(action) {
    console.log('post request', action.payload);
    try {
        yield call(axios.post, '/api/band', action.payload);
    } catch (error) {
        console.log('Error posting new band info', error);
    }
}

function* bandInfoSaga() {
    // yield takeLatest('FETCH_ALL_FESTIVALS', fetchAllFestivals);
    yield takeLatest('ADD_BAND_INFO', addBandInfo);
  }


  
  export default bandInfoSaga;