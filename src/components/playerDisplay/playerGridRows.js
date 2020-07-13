import React from 'react'
import moment from 'moment'

export default function PlayerGridRow({playerData}) {  

return <tr>
<td>{`${playerData.player.first_name} ${playerData.player.last_name}`}</td>
<td>{playerData.team.abbreviation}</td>
<td>{playerData.pts}</td>
<td>{playerData.ast}</td>
<td>{playerData.reb}</td>
  </tr>
}
