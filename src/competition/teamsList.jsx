import React from 'react'

export default props => {
    const renderRows = () => {
        var team = undefined;
        const data = props.list.standings || [];
        const element = (data[0]) ? data[0] : null;
        if (element) {
            team = (element.table) ? element.table : null
            //console.log(team);             
            return team.map(club => (
                <tr key={club.team.id}>
                    <td>{club.position}</td>
                    <td>{club.team.name}</td>
                    <td>{club.points}</td>
                    <td>{club.won}</td>
                    <td>{club.draw}</td>
                    <td>{club.lost}</td>
                </tr>
            ))
        }
    }
    return (
        <div>
            <span className='competitionName'>{props.competition}</span>
            <div className='table-responsive'>
                <table className="table">
                    <thead className='thead-dark'>
                        <tr>
                            <th scope="col">Posição</th>
                            <th scope="col">Clube</th>
                            <th scope="col">Pontos</th>
                            <th scope="col">Vitórias</th>
                            <th scope="col">Empates</th>
                            <th scope="col">Derrotas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>
        </div>
    )

}