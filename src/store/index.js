import { createStore } from "redux"


var store = createStore(function (state, action) {
    switch (action.type) {
        case "seen": return [action.obj,...state]
        default: return []
    }
})
store.dispatch({
    type: ""
})

console.log(store.getState())
export default store