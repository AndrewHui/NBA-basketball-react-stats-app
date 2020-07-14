import React from 'react'
import SeasonTable from './SeasonTableComponents/SeasonTable'
import PlayerStatsTable from './PlayerStatsComponents/PlayerStatsTable'
import useGameStats from '../../hooks/useGameStats'
import {assessStatusCode} from '../../util/helper'
import ErrorComponent from '../ErrorComponent'

export default function NBADataTables({selectedTeamID, NBAAllTeamData, selectedTeamsSeasonData}) {  

  const {
    getGameStats, 
    gameStats
  } = useGameStats()

  return (
    <div className = 'tables'>
      {assessStatusCode(gameStats.statusCode) ? (
        <SeasonTable selectedTeamsSeasonData = {selectedTeamsSeasonData.data} selectedTeamID = {selectedTeamID} NBAAllTeamData = {NBAAllTeamData} getGameStats = {getGameStats}/>
      ) : ( 
        <ErrorComponent/>
      )}

      {assessStatusCode(gameStats.statusCode) ? (
        <PlayerStatsTable gameStats = {gameStats.data}/>
      ) : ( 
        <ErrorComponent/>
      )}
    </div>
  )
}
