import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllFestivals(action) {
    try {
        const elementResponse = yield call(axios.get, '/api/festival');
        yield put({type: 'SET_FESTIVALS', payload: elementResponse.data});
    } catch (error) {
        console.log('Error getting festivals', error);
    }
}


function* festivalSaga() {
    yield takeLatest('FETCH_ALL_FESTIVALS', fetchAllFestivals);
  }
  
  export default festivalSaga;