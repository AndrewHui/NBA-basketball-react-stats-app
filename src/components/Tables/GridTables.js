import React from 'react'
import GridDisplay from './gamesDisplayComponents/gridDisplay'
import PlayerGridDisplay from './playerDisplay/playerGridDisplay'
import useGameDetails from '../../hooks/useGameDetails'

export default function GridTables({selectedTeamID, NBATeamData, selectedTeamsSeasonData}) {  

  const {
    updateGameDetails, 
    gameDetails
  } = useGameDetails()

  return (
    <div className = 'gridTables'>
      <GridDisplay selectedTeamsSeasonData = {selectedTeamsSeasonData} selectedTeamID = {selectedTeamID} NBATeamData = {NBATeamData} updateGameDetails = {updateGameDetails}/>
      <PlayerGridDisplay gameDetails = {gameDetails}/>
    </div>
  )
}
