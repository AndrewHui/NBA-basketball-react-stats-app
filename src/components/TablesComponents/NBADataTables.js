import React from 'react'
import SeasonTable from './SeasonTableComponents/SeasonTable'
import PlayerStatsTable from './PlayerStatsComponents/PlayerStatsTable'
import useGameDetails from '../../hooks/useGameDetails'

export default function NBADataTables({selectedTeamID, NBATeamData, selectedTeamsSeasonData}) {  

  const {
    updateGameDetails, 
    gameDetails
  } = useGameDetails()

  return (
    <div className = 'gridTables'>
      <SeasonTable selectedTeamsSeasonData = {selectedTeamsSeasonData} selectedTeamID = {selectedTeamID} NBATeamData = {NBATeamData} updateGameDetails = {updateGameDetails}/>
      <PlayerStatsTable gameDetails = {gameDetails}/>
    </div>
  )
}
