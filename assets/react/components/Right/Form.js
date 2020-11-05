import React from 'react'

export default function Form({ onSubmitForm = () => {}, onChangeInput = () => {}, value = '' }) {
    return (
        <form className="bg-light" onSubmit={onSubmitForm}>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Type a message"
                    aria-describedby="button-addon2"
                    className="form-control rounded-0 border-0 py-4 bg-light"
                    value={value}
                    onChange={(e) => onChangeInput(e.target.value)}
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
