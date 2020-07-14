import React from 'react'

// Label of individual teams in dropdown. It has an onClick function to set the selected team and kick off the selected seasons data api.

export default function TeamLabels({teamData, getSelectedTeamsSeasonData}) {  

  return (
    <a onClick = {() => getSelectedTeamsSeasonData(teamData.id)}>{teamData.abbreviation}</a>
  )
}
