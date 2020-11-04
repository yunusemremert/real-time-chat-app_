import { combineReducers } from 'redux'

import conversationReducer from './conversation'
import messagesReducer from './message'

export default combineReducers({
    conversations: conversationReducer,
    messages: messagesReducer
})
