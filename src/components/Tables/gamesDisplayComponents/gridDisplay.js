import React from 'react'
import GridRow from './gridRow'

export default function GridDisplay({selectedTeamsSeasonData, selectedTeamID, NBATeamData,updateGameDetails}) {

  console.log(selectedTeamID)
  const listGames = (selectedTeamsSeasonData) => {
    return selectedTeamsSeasonData.map(teamGameData => <GridRow teamGameData = {teamGameData} selectedTeamID = {selectedTeamID} NBATeamData = {NBATeamData} updateGameDetails = {updateGameDetails}/>)
  }
  
  return (
    <div>
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
          {listGames(selectedTeamsSeasonData)}
        </tbody>
      </table>
    </div>
  )
}
