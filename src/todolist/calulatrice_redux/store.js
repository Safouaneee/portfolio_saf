const initialState = {
    result: 0,
}

const Reducer = (state = initialState, action) => {

    switch (action.type) {

        case "add":
            return { ...state, result: action.nombres.a + action.nombres.b }

        case "sub":
            return { ...state, result: action.nombres.a - action.nombres.b }

        case "mul":
            return { ...state, result: action.nombres.a * action.nombres.b }

        case "div":
            if (action.nombres.b == 0) {
                return { ...state, result: "Erreur on peut pas deviser par 0" }
            }
            return { ...state, result: action.nombres.a / action.nombres.b }

        default:
            return state
    }
}

export default Reducer
