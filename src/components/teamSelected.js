import React from 'react'

export default function TeamSelected({NBATeamData, teamIDOne}) {  
return <div className = 'teamSelected'>Team selected: {teamIDOne ? NBATeamData[teamIDOne - 1].abbreviation: ''}</div>
}
