import React, { Component } from 'react'
import axios from 'axios'
import Form from './form'
import 'babel-polyfill'

const URL = 'https://api.football-data.org/v2'
const token = 'cb31ab3ddc9f486683ddef46c3bf3d7e'
import TeamsList from './teamsList'
import TableMoreKnow from './tableMoreKnow'
import If from '../template/if'

export default class Competition extends Component {
    constructor(props) {
        super(props);
        this.state = { stringSearch: '', list: [], show: true }
        this.onChange = this.onChange.bind(this)
        this.search = this.search.bind(this)
        this.listTeams = this.listTeams.bind(this)
        this.clear = this.clear.bind(this)

        this.listTeams()
    }

    onChange(e) {
        this.setState({ ...this.state, stringSearch: e.target.value })
    }

    async listTeams(regex = '') {
        if (regex) {
            const query = `/competitions/${regex}/standings?standingType=TOTAL`            
            await axios.get(URL + query, {
                headers: {
                    'X-Auth-Token': token
                }
            })
                .then(response => {
                    this.setState({ ...this.state, list: response.data });
                })
                .catch(error =>
                    console.log(error)
                )
        }
    }

    search() {
        this.listTeams(this.state.stringSearch)
        this.setState({...this.state, show: false})
    }

    clear(){
        this.setState({...this.state, stringSearch:'',show: true, list:[]})
    }

    render() {
        const competitionName = (this.state.list.competition) ? this.state.list.competition.name : '';
        return (
            <section>
                <div className="bg-form py-4">
                    <div className="container">
                        <Form search={this.search}
                            clear={this.clear}
                            onChange={this.onChange}
                            stringSearch={this.state.stringSearch} />
                    </div>
                </div>
                <div className="container pt-3">
                    <If test={this.state.show}>
                        <TableMoreKnow />
                    </If>
                    <If test={!this.state.show}>
                        <TeamsList list={this.state.list} competition={competitionName} />
                    </If>                    
                </div>
            </section>
        )
    }

}