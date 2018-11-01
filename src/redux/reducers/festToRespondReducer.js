// set festival to respond object to festival clicked on DOM
const festivalToRespond = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FESTIVAL_TO_RESPOND':
            return action.payload;
        default:
            return state;
    }
}

export default festivalToRespond;