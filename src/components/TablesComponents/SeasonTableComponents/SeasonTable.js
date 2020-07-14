import React from 'react'
import SeasonRows from './SeasonRows'

export default function SeasonTable({selectedTeamsSeasonData, selectedTeamID, NBATeamData,updateGameDetails}) {

  const listGames = (selectedTeamsSeasonData) => {
    return selectedTeamsSeasonData.map(teamGameData => <SeasonRows teamGameData = {teamGameData} selectedTeamID = {selectedTeamID} NBATeamData = {NBATeamData} updateGameDetails = {updateGameDetails}/>)
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
