import axios from "axios";

export const setPizzas = (pizzas) =>({
    type: "SET_PIZZAS",
    payload: pizzas
});

export const setLoaded = (state) =>({
    type: "SET_LOADED",
    payload: state
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    axios
        .get(
            `http://localhost:3001/pizzas?${category ? `category=${category - 1}&` : ''}_sort=${sortBy}&_order=asc`,
        )
        .then(({ data }) => {
            dispatch(setPizzas(data));
            dispatch(setLoaded(true));
        });
}