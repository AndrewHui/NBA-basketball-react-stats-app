import React from 'react'
import EachTeamDropdown from './eachTeamDropdown'
import DashboardStats from '../dashboardStats'


export default function TeamDropdown({NBATeamData, dropdownName, setTeamID}) {

  const listTeams = (NBATeamData) => {
    return NBATeamData.map(teamData => <EachTeamDropdown teamData = {teamData} setTeamID = {setTeamID}/>)
  }

  return <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">{dropdownName}</button>
    <div id="myDropdown" class="dropdown-content">
      {listTeams(NBATeamData)}
  </div>
</div>
}
