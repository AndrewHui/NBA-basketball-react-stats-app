import React from 'react'
import SeasonTable from './SeasonTableComponents/SeasonTable'
import PlayerStatsTable from './PlayerStatsComponents/PlayerStatsTable'
import useGameStats from '../../hooks/useGameStats'

export default function NBADataTables({selectedTeamID, NBAAllTeamData, selectedTeamsSeasonData}) {  

  const {
    getGameStats, 
    gameStats
  } = useGameStats()

  return (
    <div className = 'gridTables'>
      <SeasonTable selectedTeamsSeasonData = {selectedTeamsSeasonData} selectedTeamID = {selectedTeamID} NBAAllTeamData = {NBAAllTeamData} getGameStats = {getGameStats}/>
      <PlayerStatsTable gameStats = {gameStats}/>
    </div>
  )
}
