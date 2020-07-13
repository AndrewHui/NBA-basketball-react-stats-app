import React from 'react'
import GridRow from './gridRow'

export default function GridDisplay({teamOneNBAData, teamIDOne, NBATeamData, setGame, updateGameDetails}) {

  const listGames = (teamOneNBAData) => {
    return teamOneNBAData.map(teamGameData => <GridRow teamGameData = {teamGameData} teamIDOne = {teamIDOne} NBATeamData = {NBATeamData} setGame = {setGame} updateGameDetails = {updateGameDetails}/>)
  }
  
return <div>
  <table class="table">
<thead class="thead-dark">
  <tr>
    <th scope="col">Date</th>
    <th scope="col">Home</th>
    <th scope="col">Score</th>
    <th scope="col">Away</th>
  </tr>
</thead>
<tbody>
  {listGames(teamOneNBAData)}
</tbody>
</table>
</div>
}
