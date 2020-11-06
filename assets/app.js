/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css'

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

import React from 'react'
import ReactDOM from 'react-dom'

import store from './react/store'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { setUsername } from './react/store/actions/conversation'

import App from './react/components/App'

store.dispatch(setUsername(document.querySelector('#app').dataset.username))

ReactDOM.render(
    <Provider store={store}>
        <MemoryRouter>
            <App />
        </MemoryRouter>
    </Provider>,
    document.querySelector('#app')
)
