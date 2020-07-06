const data = require('../response.json')

let initialState = {
    data: data
}

const getDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD": {
            let { mylist } = state.data
            mylist.push(action.payload)
            state.data.recommendations = state.data.recommendations.filter(e => e.id !== action.payload.id)

            console.log(state.data, "tempttt")
            return {
                ...state
            }
        }


        case "REMOVE": {
            let { recommendations } = state.data

            recommendations.push(action.payload)
            state.data.mylist = state.data.mylist.filter(e => e.id !== action.payload.id)

            console.log("rmc", state.data)
            return {
                ...state
            }
        }

        default: {
            return state
        }
    }
}

export default getDataReducer;