import React from 'react'

export default function Message({ message }) {
    const img = 'https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg'

    return (
        <div className={`media w-50 mb-3 ${message.mine ? 'ml-auto' : ''}`}>
            {!message.mine ? <img src={img} alt="user" width="50" className="rounded-circle" /> : ''}
            <div className="media-body ml-3">
                <div className={`rounded py-2 px-3 mb-2 ${message.mine ? 'bg-primary' : 'bg-light'}`}>
                    <p className={`text-small mb-0 ${message.mine ? 'text-light' : 'text-muted'}`}>{message.content}</p>
                </div>
                <p className="small text-muted">{new Date(message.createdAt).toDateString()}</p>
            </div>
        </div>
    )
}
