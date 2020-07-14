import React from 'react'
import moment from 'moment'

export default function GridRow({teamGameData, selectedTeamID, NBATeamData, updateGameDetails}) {  

  const formatDate = (teamGameData) => {
    return moment(teamGameData.date).format(("MMM Do YYYY"))
  }

  const validateSelectedTeam = (selectedTeamID, NBATeamData, teamAbbreviation) => {
    return isHomeTeam(selectedTeamID, NBATeamData, teamAbbreviation) ? 'abbreviation-highlight' : ''
  }

  const isHomeTeam = (selectedTeamID, NBATeamData, teamAbbreviation) => {
    return NBATeamData[selectedTeamID - 1].abbreviation === teamAbbreviation
  }

  const clickDetails = () => {
    updateGameDetails(teamGameData.id)
  }

  return (
    <tr onClick={()=> clickDetails()}>
      <td>{formatDate(teamGameData)}</td>
      <td className={validateSelectedTeam(selectedTeamID, NBATeamData, teamGameData.home_team.abbreviation)}>{teamGameData.home_team.abbreviation}</td>
      <td>{`${teamGameData.home_team_score} - ${teamGameData.visitor_team_score}`}</td>
      <td className={validateSelectedTeam(selectedTeamID, NBATeamData, teamGameData.visitor_team.abbreviation)}>{teamGameData.visitor_team.abbreviation}</td>
    </tr>
  )
}
