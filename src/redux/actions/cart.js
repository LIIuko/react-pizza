export const addPizzaCart = (item) =>({
    type: "ADD_PIZZA",
    payload: item
});

export const clearPizzaCart = () =>({
    type: "CLEAR_PIZZA",
});

export const plusPizzaCart = (id) =>({
    type: "PLUS_PIZZA",
    payload: id
});

export const minusPizzaCart = (id) =>({
    type: "MINUS_PIZZA",
    payload: id
});

export const removePizzaCart = (id) =>({
    type: "REMOVE_PIZZA",
    payload: id
});