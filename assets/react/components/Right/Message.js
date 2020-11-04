import React from 'react'

export default function Message() {
    const img = 'https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg'

    return (
        <div className="media w-50 mb-3">
            <img src={img} alt="user" width="50" className="rounded-circle" />
            <div className="media-body ml-3">
                <div className="bg-light rounded py-2 px-3 mb-2">
                    <p className="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
                </div>
                <p className="small text-muted">12:00 PM | Aug 13</p>
            </div>
        </div>
    )
}
