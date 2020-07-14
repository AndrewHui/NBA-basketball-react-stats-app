import React from 'react'
import SeasonTable from './SeasonTableComponents/SeasonTable'
import PlayerStatsTable from './PlayerStatsComponents/PlayerStatsTable'
import useGameStats from '../../hooks/useGameStats'

export default function NBADataTables({selectedTeamID, NBATeamData, selectedTeamsSeasonData}) {  

  const {
    getGameStats, 
    gameStats
  } = useGameStats()

  return (
    <div className = 'gridTables'>
      <SeasonTable selectedTeamsSeasonData = {selectedTeamsSeasonData} selectedTeamID = {selectedTeamID} NBATeamData = {NBATeamData} getGameStats = {getGameStats}/>
      <PlayerStatsTable gameStats = {gameStats}/>
    </div>
  )
}
