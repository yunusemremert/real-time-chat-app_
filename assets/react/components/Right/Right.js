import React, { createRef, useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMessages } from '../../store/actions/message'

import Message from './Message'
import Form from './Form'

export default function Right({ ...props }) {
    const bodyRef = createRef()

    const conversationId = props.match.params.id

    const dispatch = useDispatch()
    const { messages } = useSelector((state) => state.messages)

    useEffect(() => {
        dispatch(fetchMessages(conversationId))
    }, [])

    // Messages Scroll
    const scrollDown = () => {
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }

    useLayoutEffect(() => {
        scrollDown()
    })

    return (
        <div className="col-7 px-0">
            <div className="px-4 py-5 chat-box bg-white" ref={bodyRef}>
                {messages
                    ? messages.map((message, key) => {
                          return <Message message={message} key={key} />
                      })
                    : '...'}
            </div>
            <Form conversationId={conversationId} />
        </div>
    )
}
