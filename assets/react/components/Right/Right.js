import React, { createRef, useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMessages, postMessage } from '../../store/actions/message'

import Message from './Message'
import Form from './Form'

export default function Right({ ...props }) {
    const [messageForm, setMessageForm] = useState('')

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

    // Form
    const changeFilter = useCallback((message) => {
        setMessageForm(message)
    }, [])

    const submitForm = (e) => {
        e.preventDefault()

        dispatch(postMessage(messageForm, conversationId))

        setMessageForm('')
    }

    return (
        <div className="col-7 px-0">
            <div className="px-4 py-5 chat-box bg-white" ref={bodyRef}>
                {messages
                    ? messages.map((message, key) => {
                          return <Message message={message} key={key} />
                      })
                    : '...'}
            </div>
            <Form onSubmitForm={submitForm} onChangeInput={changeFilter} value={messageForm} />
        </div>
    )
}
