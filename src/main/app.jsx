import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React, { Component } from 'react'

import Competition from '../competition/competition'

export default class App extends Component {
    render() {
        return (
            <section>
                <div className="jumbotron mb-0">
                    <h1 className="display-4">FootMania</h1>
                    <p className="lead">O lugar daqueles que estão sempre querendo acompanhar o campeonato do seu time.</p>                    
                </div>
                <Competition />
            </section>
                )
            }
}