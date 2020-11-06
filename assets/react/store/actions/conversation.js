import fetcher from '../../lib/fetcher'

import * as types from '../types'

export const fetchConversations = () => async (dispatch) => {
    const res = await fetcher(`/conversations/`)

    // MERCURE
    const hubUrl = res.headers.get('Link').match(/<([^>]+)>;\s+rel=(?:mercure|"[^"]*mercure[^"]*")/)[1]

    dispatch({
        type: types.SET_HUBURL,
        payload: hubUrl
    })

    // ALL CONVERSATIONS
    const data = await res.json()

    dispatch({
        type: types.GET_CONVERSATIONS,
        payload: data
    })
}

export const setUsername = (username) => (dispatch) => {
    dispatch({
        type: types.SET_USERNAME,
        payload: username
    })
}
