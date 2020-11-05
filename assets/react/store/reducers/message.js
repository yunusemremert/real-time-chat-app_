import * as types from '../types'

const initialState = {
    messages: []
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }

        case types.SET_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state
    }
}

export default messagesReducer
