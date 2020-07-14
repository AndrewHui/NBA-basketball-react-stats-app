import React from 'react'


export default function TeamLabels({teamData, getSelectedTeamsSeasonData}) {  

  return (
    <a onClick = {() => getSelectedTeamsSeasonData(teamData.id)}>{teamData.abbreviation}</a>
  )
}
