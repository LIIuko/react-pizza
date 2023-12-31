import axios from "axios";

export const setPizzas = (pizzas) => ({
    type: "SET_PIZZAS",
    payload: pizzas
});

export const setLoaded = (state) => ({
    type: "SET_LOADED",
    payload: state
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    const url = `https://my-json-server.typicode.com/LIIuko/react-pizza/pizzas?${category ? `category=${category - 1}&` : ''}_sort=${sortBy}&_order=asc`
    dispatch(setLoaded(false));
    axios
        .get(url)
        .then(({data}) => {
            dispatch(setPizzas(data));
            dispatch(setLoaded(true));
        });
}