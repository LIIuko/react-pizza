export const setSortBy = (type) =>({
    type: "SET_SORT_BY",
    payload: type
});

export const setCategory = (categoryIndex) =>({
    type: "SET_CATEGORY",
    payload: categoryIndex
});