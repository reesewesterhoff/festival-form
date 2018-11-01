// set festivals array to whatever information comes back from database
const festivalReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FESTIVALS':
            return action.payload;
        default:
            return state;
    }
};


export default festivalReducer;

