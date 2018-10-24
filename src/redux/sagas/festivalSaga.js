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

function* createFestival(action) {
    try {
        yield call(axios.post, '/api/festival', action.payload);
    } catch (error) {
        console.log('Error creating new festival', error);
    }
}

function* deleteFestival(action) {
    try {
        yield call(axios.delete, `/api/festival/${action.payload}`);
        yield put({type: 'FETCH_ALL_FESTIVALS'});
    } catch (error) {
        console.log('Error deleting festival');
    }
}

function* updateFestival(action) {
    try {
        yield call(axios.put, `/api/festival/${action.payload.id}`, action.payload);
        yield put({type: 'FETCH_ALL_FESTIVALS'});
    } catch (error) {
        console.log('Error updating festival', error);
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

function* festivalSaga() {
    yield takeLatest('FETCH_ALL_FESTIVALS', fetchAllFestivals);
    yield takeLatest('FESTIVAL_RESPONSE', festivalResponse);
    yield takeLatest('CREATE_FESTIVAL', createFestival);
    yield takeLatest('DELETE_FESTIVAL', deleteFestival);
    yield takeLatest('UPDATE_FESTIVAL', updateFestival);
  }
  
  export default festivalSaga;