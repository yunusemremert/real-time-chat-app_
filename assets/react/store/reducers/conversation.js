import * as types from '../types'

const initialState = {
    conversations: []
}

export const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CONVERSATIONS:
            return {
                ...state,
                conversations: action.payload
            }

        default:
            return state
    }
}

export default conversationsReducer
