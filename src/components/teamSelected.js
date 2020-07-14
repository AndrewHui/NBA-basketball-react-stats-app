import React from 'react'

export default function TeamSelected({NBATeamData, selectedTeamID}) {

  const getTeamAbbreviation = (NBATeamData, selectedTeamID) => {
    return NBATeamData[selectedTeamID - 1].abbreviation
  }
  
  return (
    <div className = 'teamSelected'>Team selected: {selectedTeamID ? getTeamAbbreviation(NBATeamData, selectedTeamID) : ''}
    </div>
  )
}
