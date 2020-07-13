import React from 'react'
import moment from 'moment'

export default function GridRow({teamGameData}) {  

  const formatDate = (teamGameData) => {
    return moment(teamGameData.date).format(("MMM Do YYYY"))
  }

return <tr>
<td>{formatDate(teamGameData)}</td>
<td>{teamGameData.home_team.abbreviation}</td>
<td>{`${teamGameData.home_team_score} - ${teamGameData.visitor_team_score}`}</td>
<td>{teamGameData.visitor_team.abbreviation}</td>
  </tr>
}
