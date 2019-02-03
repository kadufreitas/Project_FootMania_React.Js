import React from 'react'
import Grid from '../template/grid'

export default props => {
    const keyEvent = (e) => {
        if (e.key === 'Enter') {
            props.search()
        }
    }
    return (
        <div role='form' className='todoForm'>
            <div className="row">
                <Grid cols='12 8 8'>
                    <input id='search' className='form-control'
                        placeholder='Pesquise por um campeonato, usando seu ID ou Sigla'
                        onKeyUp={keyEvent}
                        onChange={props.onChange}
                        value={props.stringSearch}></input>
                </Grid>
                <Grid cols='12 4 4'>
                    <div className='text-center pt-sm-0 pt-3'>
                        <button type="button" className="btn btn-light mr-2"
                            onClick={props.search}>Buscar</button>
                        <button type="button" className="btn btn-warning ml-2"
                        onClick={props.clear}>Clear</button>
                    </div>
                </Grid>
            </div>
        </div>
    )
}