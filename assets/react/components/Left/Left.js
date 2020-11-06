import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchConversations } from '../../store/actions/conversation'

import Conversation from './Conversation'
import { setConversationLastMessage } from '../../store/actions/message'

function Left() {
    const dispatch = useDispatch()

    const { conversations, hubUrl, username } = useSelector((state) => state.conversations)

    useEffect(() => {
        dispatch(fetchConversations())
    }, [])

    useEffect(() => {
        if (hubUrl) {
            let url = new URL(hubUrl)

            url.searchParams.append('topic', `/conversations/${username}`)

            const eventSource = new EventSource(url, {
                withCredentials: true
            })

            eventSource.onmessage = function (event) {
                const data = JSON.parse(event.data)

                dispatch(setConversationLastMessage(data, data.conversation.id))
            }
        }
    }, [hubUrl])

    return (
        <div className="col-5 px-0">
            <div className="bg-white">
                <div className="bg-gray px-4 py-2 bg-light">
                    <p className="h5 mb-0 py-1">Recent</p>
                </div>
                <div className="messages-box">
                    <div className="list-group rounded-0">
                        {conversations
                            .sort((a, b) => {
                                return new Date(b.createdAt) - new Date(a.createdAt)
                            })
                            .map((conversation, index) => {
                                return <Conversation key={index} conversation={conversation} />
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Left
