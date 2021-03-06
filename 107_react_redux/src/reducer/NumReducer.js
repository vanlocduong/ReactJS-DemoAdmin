const numInitialState = ["man hinh ", "chuot ", "ban phim "]
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case "NEW_ITEM":
            return [...state, action.newItem]
        case "DELETE":
            return [state.filter((value, i) => i !== action.number)]
        default:
            return state
    }
}
export default numReducer;