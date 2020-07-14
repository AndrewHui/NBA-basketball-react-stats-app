import React from 'react'
import moment from 'moment'

export default function SeasonRows({game, selectedTeamID, NBATeamData, getGameStats}) {  

  const formatDate = (game) => {
    return moment(game.date).format(("MMM Do YYYY"))
  }

  const highlightSelectedTeam = (selectedTeamID, NBATeamData, teamAbbreviation) => {
    return isHomeTeam(selectedTeamID, NBATeamData, teamAbbreviation) ? 'abbreviation-highlight' : ''
  }

  const isHomeTeam = (selectedTeamID, NBATeamData, teamAbbreviation) => {
    return NBATeamData[selectedTeamID - 1].abbreviation === teamAbbreviation
  }

  const createScoreString = (game) => {
    return `${game.home_team_score} - ${game.visitor_team_score}`
  }

  return (
    <tr onClick={()=> getGameStats(game.id)}>
      <td>{formatDate(game)}</td>
      <td className={highlightSelectedTeam(selectedTeamID, NBATeamData, game.home_team.abbreviation)}>{game.home_team.abbreviation}</td>
      <td>{createScoreString(game)}</td>
      <td className={highlightSelectedTeam(selectedTeamID, NBATeamData, game.visitor_team.abbreviation)}>{game.visitor_team.abbreviation}</td>
    </tr>
  )
}
