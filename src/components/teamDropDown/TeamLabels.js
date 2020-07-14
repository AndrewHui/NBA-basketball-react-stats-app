import React from 'react'


export default function TeamLabels({teamData, setTeamID}) {  

  return (
    <a onClick = {() => setTeamID(teamData.id)}>{teamData.abbreviation}</a>
  )
}
