import fetcher from '../../lib/fetcher'

import * as types from '../types'

export const fetchMessages = (id) => async (dispatch) => {
    const data = await fetcher(`/messages/${id}`)

    dispatch({
        type: types.GET_MESSAGES,
        payload: data
    })
}

export const postMessage = (message, conversationId) => async (dispatch) => {
    let formData = new FormData()
    formData.append('content', message)

    const data = await fetcher(`/messages/${conversationId}`, {
        method: 'POST',
        body: formData
    })

    dispatch({
        type: types.SET_CONVERSATIONS_LAST_MESSAGE,
        payload: {
            conversationId: conversationId,
            message: data
        }
    })

    dispatch({
        type: types.SET_MESSAGES,
        payload: data
    })
}
