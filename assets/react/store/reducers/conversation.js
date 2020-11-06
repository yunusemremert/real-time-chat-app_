import * as types from '../types'

const initialState = {
    conversations: [],
    hubUrl: null,
    username: null
}

export const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }

        case types.SET_HUBURL:
            return {
                ...state,
                hubUrl: action.payload
            }

        case types.GET_CONVERSATIONS:
            return {
                ...state,
                conversations: action.payload
            }

        case types.SET_CONVERSATIONS_LAST_MESSAGE:
            const lastMessage = state.conversations.map((conversation) => {
                return conversation.conversationId == action.payload.conversationId
                    ? ((conversation.content = action.payload.message.content),
                      (conversation.createdAt = action.payload.message.createdAt),
                      Object.assign({}, conversation))
                    : conversation
            })

            return {
                ...state,
                conversations: lastMessage
            }

        default:
            return state
    }
}

export default conversationsReducer
