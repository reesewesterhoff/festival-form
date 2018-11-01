import { put, takeLatest, call } from 'redux-saga/effects';
// for axios requests
import axios from 'axios';

// handles getting all festivals from database for home page on DOM
function* fetchAllFestivals(action) {
    try {
        // get any festivals in the database
        const elementResponse = yield call(axios.get, '/api/festival');
        yield put({type: 'SET_FESTIVALS', payload: elementResponse.data});
    } catch (error) {
        console.log('Error getting festivals', error);
    }
}

// handles creation of a new festival
function* createFestival(action) {
    try {
        // post new festival to database
        yield call(axios.post, '/api/festival', action.payload);
    } catch (error) {
        console.log('Error creating new festival', error);
    }
}

// handles deletion of festival
function* deleteFestival(action) {
    try {
        // find festival by id and delete it from database
        yield call(axios.delete, `/api/festival/${action.payload}`);
        // refreshes DOM with current festivals
        yield put({type: 'FETCH_ALL_FESTIVALS'});
    } catch (error) {
        console.log('Error deleting festival');
    }
}

// handles updating a festival's information
function* updateFestival(action) {
    try {
        // finds festival by id and sets info to user input
        yield call(axios.put, `/api/festival/${action.payload.id}`, action.payload);
        // refreshes DOM with updated festival information
        yield put({type: 'FETCH_ALL_FESTIVALS'});
    } catch (error) {
        console.log('Error updating festival', error);
    }
}

// handles update of redux state when a user clicks on a specific festival
function* festivalResponse(action) {
    let festivalToRespond = action.payload;
    try {
        // set festToRespond to whatever festival user clicked on
        yield put({type: 'SET_FESTIVAL_TO_RESPOND', payload: festivalToRespond});
    } catch (error) {
        console.log('Error getting festival for response', error);
    }
}

// handles incoming actions and directs them to the appropriate generator function
function* festivalSaga() {
    yield takeLatest('FETCH_ALL_FESTIVALS', fetchAllFestivals);
    yield takeLatest('FESTIVAL_RESPONSE', festivalResponse);
    yield takeLatest('CREATE_FESTIVAL', createFestival);
    yield takeLatest('DELETE_FESTIVAL', deleteFestival);
    yield takeLatest('UPDATE_FESTIVAL', updateFestival);
  }
  
  export default festivalSaga;