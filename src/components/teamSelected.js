import React from 'react'

export default function TeamSelected({NBAAllTeamData, selectedTeamID}) {

  const getTeamAbbreviation = (NBAAllTeamData, selectedTeamID) => {
    return NBAAllTeamData[selectedTeamID - 1].abbreviation
  }
  
  return (
    <div className = 'teamSelected'>Team selected: {selectedTeamID ? getTeamAbbreviation(NBAAllTeamData, selectedTeamID) : ''}
    </div>
  )
}
