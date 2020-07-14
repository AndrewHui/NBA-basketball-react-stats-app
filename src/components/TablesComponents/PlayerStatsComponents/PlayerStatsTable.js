import React from 'react'
import PlayerStatsRows from './PlayerStatsRows'

// Simple table that will map through an array of players to display the player statitstics.

export default function PlayerStatsTable({gameStats}) {

  return (
    <div className='playerGrid'>
      <table>
        <thead>
          <tr>
            <th scope='col'>Player</th>
            <th scope='col'>Team</th>
            <th scope='col'>Points</th>
            <th scope='col'>Assists</th>
            <th scope='col'>Rebounds</th>
            <th scope='col'>Steals</th>
            <th scope='col'>Blocks</th>
          </tr>
        </thead>
        <tbody>
          {gameStats.map(player => <PlayerStatsRows playerData = {player}/>)}
        </tbody>
      </table>
    </div>
  )
}
