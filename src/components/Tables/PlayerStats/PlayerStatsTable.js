import React from 'react'
import PlayerStatsRows from './PlayerStatsRows'

export default function PlayerStatsTable({gameDetails}) {

  return (
    <div className='playerGrid'>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Player</th>
            <th scope="col">Team</th>
            <th scope="col">Points</th>
            <th scope="col">Assists</th>
            <th scope="col">Rebounds</th>
            <th scope="col">Steals</th>
            <th scope="col">Blocks</th>
          </tr>
        </thead>
        <tbody>
          {gameDetails.map(player => <PlayerStatsRows playerData = {player}/>)}
        </tbody>
      </table>
    </div>
  )
}
