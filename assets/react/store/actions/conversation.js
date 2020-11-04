import fetcher from '../../lib/fetcher'

import * as types from '../types'

export const fetchConversations = () => async (dispatch) => {
    const data = await fetcher(`/conversations/`)

    dispatch({
        type: types.GET_CONVERSATIONS,
        payload: data
    })
}
