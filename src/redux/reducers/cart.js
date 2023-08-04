const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA": {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }

            const cartItems = [].concat.apply([], Object.values(newItems))
            const totalCount = Object.values(cartItems).reduce((sum, item) => sum + item.items.length, 0)
            const totalPrice = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            }
        }
        default:
            return state;
    }
}