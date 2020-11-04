import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Left from './Left/Left'
import Right from './Right/Right'
import Blank from './Right/Blank'

export default function App() {
    return (
        <div className="container py-5 px-4">
            <div className="row rounded-lg overflow-hidden shadow">
                <Left />
                <Switch>
                    <Route path="/" component={Blank} exact />
                    <Route
                        path="/conversation/:id"
                        render={(props) => <Right {...props} key={props.match.params.id} />}
                    />
                </Switch>
            </div>
        </div>
    )
}
