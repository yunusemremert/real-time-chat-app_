import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMessages } from '../../store/actions/message'

import Message from './Message'
import Form from './Form'

export default function Right({ ...props }) {
    const id = props.match.params.id

    const dispatch = useDispatch()
    const { messages } = useSelector((state) => state.messages)

    useEffect(() => {
        dispatch(fetchMessages(id))
    }, [])

    return (
        <div className="col-7 px-0">
            <div className="px-4 py-5 chat-box bg-white">
                <Message />
            </div>
            <Form />
        </div>
    )
}
