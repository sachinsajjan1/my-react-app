function incerementSuccess(result) {
    return { type: "INCREMENT_SUCCESS", result }
}

function decerementSuccess(result) {
    return { type: "DECREMENT_SUCCESS", result }
}

export function increment(counter) {
    return function (dispatch) {
        counter = counter + 1;
        dispatch(incerementSuccess(counter));
    }
}

export function decrement(counter) {
    return function (dispatch) {
        counter = counter - 1;
        dispatch(decerementSuccess(counter));
    }
}