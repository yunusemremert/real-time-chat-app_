import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Conversation({ conversation }) {
    const img = 'https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg'

    return (
        <NavLink
            to={`/conversation/${conversation.conversationId}`}
            className="list-group-item list-group-item-action rounded-0"
            activeClassName="active text-white "
        >
            <div className="media">
                <img src={img} alt="user" width="50" className="rounded-circle" />
                <div className="media-body ml-4">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <h6 className="mb-0">{conversation.username}</h6>
                        <small className="small font-weight-bold">
                            {new Date(conversation.createdAt).toDateString()}
                        </small>
                    </div>
                    <p className="font-italic mb-0 text-small">{conversation.content}</p>
                </div>
            </div>
        </NavLink>
    )
}
