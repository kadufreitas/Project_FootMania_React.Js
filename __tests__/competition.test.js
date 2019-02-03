const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com/users';

const URL = 'https://api.football-data.org/v2';
const token = 'cb31ab3ddc9f486683ddef46c3bf3d7e';

import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Competition from '../src/competition/competition'

configure({adapter: new Adapter()});

it('Deveria retornar Premier League', async () => {
    const query = `/competitions/PL`

    const req = await axios.get(URL + query, {
        headers: {
            'X-Auth-Token': token
        }
    });
    
    const competitionName = req.data.name;    
    
    expect(competitionName).toBe('Premier League');
});

it('Deveria retornar Championship quando passado 2016', async () => {
    const query = `/competitions/2016`

    const req = await axios.get(URL + query, {
        headers: {
            'X-Auth-Token': token
        }
    });
    
    const competitionName = req.data.name;    
    
    expect(competitionName).toBe('Championship');
});

it('Deveria fazer uma busca por PL e retornar Premier League', async () => {
    const wrapper = shallow(<Competition />);
    const instance = wrapper.instance();
    
    var resp = await instance.listTeams('PL');
    const competitionName = wrapper.state('list');
    
    expect(competitionName.competition.name).toBe('Premier League');
});

