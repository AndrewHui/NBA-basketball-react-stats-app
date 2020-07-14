import React from 'react'

// Component that displays the current state of the team selected

export default function TeamSelected({NBAAllTeamData, selectedTeamID}) {

  const getTeamAbbreviation = (NBAAllTeamData, selectedTeamID) => {
    return NBAAllTeamData[selectedTeamID - 1].abbreviation
  }
  
  return (
    <div className = 'teamSelected'>Team selected: {selectedTeamID ? getTeamAbbreviation(NBAAllTeamData, selectedTeamID) : ''}
    </div>
  )
}
