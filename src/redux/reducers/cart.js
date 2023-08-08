const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}


export const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA": {
            const currentTotalCount = !state.items[action.payload.id]
                ? 1
                : state.items[action.payload.id].totalCount + 1

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    item: action.payload,
                    totalCount: currentTotalCount,
                    totalPrice: action.payload.price * currentTotalCount
                }
            }

            const totalCount = Object.values(newItems).reduce((sum, item) => sum + item.totalCount, 0)
            const totalPrice = Object.values(newItems).reduce((sum, item) => sum + item.totalPrice, 0);

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            }
        }

        case "CLEAR_PIZZA":
            return{
                items: {},
                totalPrice:0,
                totalCount:0
            }

        case "REMOVE_PIZZA": {
            const newItems = {...state.items}
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].totalCount

            delete newItems[action.payload]

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        }
        case "PLUS_PIZZA": {
            const newTotalCount = state.items[action.payload].totalCount + 1
            const newItems = {
                ...state.items,
                [action.payload]:{
                    item: state.items[action.payload].item,
                    totalPrice: state.items[action.payload].item.price * newTotalCount,
                    totalCount: newTotalCount
                }
            }

            const totalPrice = state.totalPrice + state.items[action.payload].item.price
            const totalCount = state.totalCount + 1

            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount
            }
        }

        case "MINUS_PIZZA": {
            const newTotalCount = state.items[action.payload].totalCount - 1
            const newItems = {
                ...state.items,
                [action.payload]:{
                    item: state.items[action.payload].item,
                    totalPrice: state.items[action.payload].item.price * newTotalCount,
                    totalCount: newTotalCount
                }
            }

            const totalPrice = state.totalPrice - state.items[action.payload].item.price
            const totalCount = state.totalCount - 1


            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount
            }
        }

        default:
            return state;
    }
}