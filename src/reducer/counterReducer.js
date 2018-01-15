
export default function counterUpdate(state = 0, action) {
    debugger;
    switch (action.type) {
        case "INCREMENT_SUCCESS":
            // return Object.assign({}, state, action.result);
            return action.result;

        case "DECREMENT_SUCCESS":
            return action.result;
        default:
            return state
    }
}