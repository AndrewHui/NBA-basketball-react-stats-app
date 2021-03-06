import React from 'react'
import SeasonRows from './SeasonRows'

// Simple table that will map through an array of 2019 games to display the game scores

export default function SeasonTable({selectedTeamsSeasonData, selectedTeamID, NBAAllTeamData, getGameStats}) {

  const listGames = (selectedTeamsSeasonData) => {
    return selectedTeamsSeasonData.map(game => <SeasonRows game = {game} selectedTeamID = {selectedTeamID} NBAAllTeamData = {NBAAllTeamData} getGameStats = {getGameStats}/>)
  }
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope='col'>Date</th>
            <th scope='col'>Home</th>
            <th scope='col'>Score</th>
            <th scope='col'>Away</th>
          </tr>
        </thead>
        <tbody>
          {listGames(selectedTeamsSeasonData)}
        </tbody>
      </table>
    </div>
  )
}
