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

function* festivalResponse(action) {
    let festivalToRespond = action.payload;
    try {
        yield put({type: 'SET_FESTIVAL_TO_RESPOND', payload: festivalToRespond});
    } catch (error) {
        console.log('Error getting festival for response', error);
    }
}

function* createFestival(action) {
    try {
        yield call(axios.post, '/api/festival', action.payload);
    } catch (error) {
        console.log('Error creating new festival', error);
    }
}

function* festivalSaga() {
    yield takeLatest('FETCH_ALL_FESTIVALS', fetchAllFestivals);
    yield takeLatest('FESTIVAL_RESPONSE', festivalResponse);
    yield takeLatest('CREATE_FESTIVAL', createFestival);
  }
  
  export default festivalSaga;