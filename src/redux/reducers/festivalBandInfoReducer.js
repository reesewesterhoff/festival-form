// set festival respondents array to whatever information comes back from the database
const festivalBandInfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESPONDENTS':
            return [...action.payload];
        default:
            return state;
    }
};


export default festivalBandInfoReducer;