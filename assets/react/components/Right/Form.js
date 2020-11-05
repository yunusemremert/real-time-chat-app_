import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { postMessage } from '../../store/actions/message'

export default function Form({ conversationId }) {
    const dispatch = useDispatch()

    const [message, setMessage] = useState('')

    const submitForm = (e) => {
        e.preventDefault()

        dispatch(postMessage(message, conversationId))

        setMessage('')
    }

    return (
        <form className="bg-light" onSubmit={submitForm}>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Type a message"
                    aria-describedby="button-addon2"
                    className="form-control rounded-0 border-0 py-4 bg-light"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div className="input-group-append">
                    <button id="button-addon2" type="submit" className="btn btn-link">
                        <i className="fa fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </form>
    )
}
