import React from 'react'
import EachTeamDropdown from './eachTeamDropdown'


export default function TeamDropdown({NBATeamData, setTeamID}) {

  const listTeams = (NBATeamData) => {
    return NBATeamData.map(teamData => <EachTeamDropdown teamData = {teamData} setTeamID = {setTeamID}/>)
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
