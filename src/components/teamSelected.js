import React from 'react'

export default function TeamSelected({NBATeamData, selectedTeamID}) {  
  return (
    <div className = 'teamSelected'>Team selected: {selectedTeamID ? NBATeamData[selectedTeamID - 1].abbreviation: ''}
    </div>
  )
}
