import React from 'react'

export default function PlayerStatsRows({playerData}) {  

  return (
    <tr>
      <td>{`${playerData.player.first_name} ${playerData.player.last_name}`}</td>
      <td>{playerData.team.abbreviation}</td>
      <td>{playerData.pts}</td>
      <td>{playerData.ast}</td>
      <td>{playerData.reb}</td>
      <td>{playerData.stl}</td>
      <td>{playerData.blk}</td>
    </tr>
  )
}
