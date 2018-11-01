// set band information object to whatever comes back from the database for that users band info
const bandInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_BAND_INFO':
            return action.payload;
        default:
            return state;
    }
};


export default bandInfoReducer;