import fetcher from '../../lib/fetcher'

import * as types from '../types'

export const fetchMessages = (id) => async (dispatch) => {
    const data = await fetcher(`/messages/${id}`)

    dispatch({
        type: types.GET_MESSAGES,
        payload: data
    })
}

export const postMessage = (message, conversationId) => async (dispatch) => {}
