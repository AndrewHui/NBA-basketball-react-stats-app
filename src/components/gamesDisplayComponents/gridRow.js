import React from 'react'
import moment from 'moment'

export default function GridRow({teamGameData, teamIDOne, NBATeamData, setGame, updateGameDetails}) {  

  const formatDate = (teamGameData) => {
    return moment(teamGameData.date).format(("MMM Do YYYY"))
  }

  const validateSelectedTeam = (teamIDOne, NBATeamData, teamAbbreviation) => {
    return isHomeTeam(teamIDOne, NBATeamData, teamAbbreviation) ? 'abbreviation-highlight' : ''
  }

  const isHomeTeam = (teamIDOne, NBATeamData, teamAbbreviation) => {
    return NBATeamData[teamIDOne - 1].abbreviation === teamAbbreviation
  }

  const clickDetails = () => {
    setGame(teamGameData.id)
    updateGameDetails(teamGameData.id)
  }
  

return <tr onClick={()=> clickDetails()}>
<td>{formatDate(teamGameData)}</td>
<td className={validateSelectedTeam(teamIDOne, NBATeamData, teamGameData.home_team.abbreviation)}>{teamGameData.home_team.abbreviation}</td>
<td>{`${teamGameData.home_team_score} - ${teamGameData.visitor_team_score}`}</td>
<td className={validateSelectedTeam(teamIDOne, NBATeamData, teamGameData.visitor_team.abbreviation)}>{teamGameData.visitor_team.abbreviation}</td>
  </tr>
}
