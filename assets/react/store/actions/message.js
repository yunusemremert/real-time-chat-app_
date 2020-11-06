import fetcher from '../../lib/fetcher'

import * as types from '../types'

export const fetchMessages = (id) => async (dispatch) => {
    const res = await fetcher(`/messages/${id}`)

    const data = await res.json()

    dispatch({
        type: types.GET_MESSAGES,
        payload: data
    })
}

export const postMessage = (message, conversationId) => async (dispatch) => {
    let formData = new FormData()
    formData.append('content', message)

    const res = await fetcher(`/messages/${conversationId}`, {
        method: 'POST',
        body: formData
    })

    const data = await res.json()

    // CONVERSATIONS LAST MESSAGE
    dispatch({
        type: types.SET_CONVERSATIONS_LAST_MESSAGE,
        payload: {
            conversationId: conversationId,
            message: data
        }
    })

    // CONVERSATIONS ALL MESSAGE
    dispatch({
        type: types.SET_MESSAGES,
        payload: data
    })
}

export const setConversationLastMessage = (data, conversationId) => async (dispatch) => {
    dispatch({
        type: types.SET_CONVERSATIONS_LAST_MESSAGE,
        payload: {
            conversationId: conversationId,
            message: data
        }
    })
}

export const setMessage = (data) => async (dispatch) => {
    dispatch({
        type: types.SET_MESSAGES,
        payload: data
    })
}
