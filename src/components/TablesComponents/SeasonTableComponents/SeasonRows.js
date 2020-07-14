import React from 'react'
import moment from 'moment'

// Component displays individual games from the 2019 season of the selected team. Also highlights the abbreviation of the selected team.

export default function SeasonRows({game, selectedTeamID, NBAAllTeamData, getGameStats}) {  

  const formatDate = (game) => {
    return moment(game.date).format(('MMM Do YYYY'))
  }

  const highlightSelectedTeam = (selectedTeamID, NBAAllTeamData, teamAbbreviation) => {
    return isSelectedTeam(selectedTeamID, NBAAllTeamData, teamAbbreviation) ? 'abbreviation-highlight' : ''
  }

  const isSelectedTeam = (selectedTeamID, NBAAllTeamData, teamAbbreviation) => {
    return NBAAllTeamData[selectedTeamID - 1].abbreviation === teamAbbreviation
  }

  const createScoreString = (game) => {
    return `${game.home_team_score} - ${game.visitor_team_score}`
  }

  return (
    <tr onClick={()=> getGameStats(game.id)}>
      <td>{formatDate(game)}</td>
      <td className={highlightSelectedTeam(selectedTeamID, NBAAllTeamData, game.home_team.abbreviation)}>{game.home_team.abbreviation}</td>
      <td>{createScoreString(game)}</td>
      <td className={highlightSelectedTeam(selectedTeamID, NBAAllTeamData, game.visitor_team.abbreviation)}>{game.visitor_team.abbreviation}</td>
    </tr>
  )
}
