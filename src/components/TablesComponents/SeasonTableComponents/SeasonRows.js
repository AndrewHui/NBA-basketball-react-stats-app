import React from 'react'
import moment from 'moment'

export default function SeasonRows({teamGameData, selectedTeamID, NBATeamData, updateGameDetails}) {  

  const formatDate = (teamGameData) => {
    return moment(teamGameData.date).format(("MMM Do YYYY"))
  }

  const highlightSelectedTeam = (selectedTeamID, NBATeamData, teamAbbreviation) => {
    return isHomeTeam(selectedTeamID, NBATeamData, teamAbbreviation) ? 'abbreviation-highlight' : ''
  }

  const isHomeTeam = (selectedTeamID, NBATeamData, teamAbbreviation) => {
    return NBATeamData[selectedTeamID - 1].abbreviation === teamAbbreviation
  }

  const createScoreString = (teamGameData) => {
    return `${teamGameData.home_team_score} - ${teamGameData.visitor_team_score}`
  }

  return (
    <tr onClick={()=> updateGameDetails(teamGameData.id)}>
      <td>{formatDate(teamGameData)}</td>
      <td className={highlightSelectedTeam(selectedTeamID, NBATeamData, teamGameData.home_team.abbreviation)}>{teamGameData.home_team.abbreviation}</td>
      <td>{createScoreString(teamGameData)}</td>
      <td className={highlightSelectedTeam(selectedTeamID, NBATeamData, teamGameData.visitor_team.abbreviation)}>{teamGameData.visitor_team.abbreviation}</td>
    </tr>
  )
}
