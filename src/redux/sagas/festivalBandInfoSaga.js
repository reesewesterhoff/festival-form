import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchFestRespondents(action) {
    console.log('saga side fest responses', action.payload);
    
    try {
        const elementResponse = yield call(axios.get, `/api/fest_band_info/${action.payload}` );
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



function* deleteRespondent(action) {
    console.log('delete action payload', action.payload);
    
    try {
        yield call(axios.delete, `/api/fest_band_info/delete/${action.payload.id}`);
        yield put({type: 'FETCH_FEST_RESPONDENTS', payload: action.payload.festival_id});
    } catch (error) {
        console.log('Error deleting festival respondent', error);
    }
}

function* festivalBandInfoSaga() {
    yield takeLatest('FETCH_FEST_RESPONDENTS', fetchFestRespondents);
    yield takeLatest('ADD_RESPONSE', addFestivalBandInfo);
    yield takeLatest('DELETE_RESPONDENT', deleteRespondent);
  }


  
  export default festivalBandInfoSaga;