import React from 'react'
import TeamLabels from './TeamLabels'


export default function TeamsDropdown({NBATeamData, setTeamID}) {

  const listTeams = (NBATeamData) => {
    return NBATeamData.map(teamData => <TeamLabels teamData = {teamData} setTeamID = {setTeamID}/>)
  }

  return (
    <div class="dropdown">
      <button onclick="myFunction()" class="dropbtn">Teams</button>
      <div id="myDropdown" class="dropdown-content">
        {listTeams(NBATeamData)}
      </div>
    </div>
  )
}
