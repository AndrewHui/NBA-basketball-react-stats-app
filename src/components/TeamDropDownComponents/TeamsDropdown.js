import React from 'react'
import TeamLabels from './TeamLabels'


export default function TeamsDropdown({NBAAllTeamData, getSelectedTeamsSeasonData}) {

  const listTeams = (NBAAllTeamData) => {
    return NBAAllTeamData.map(teamData => <TeamLabels teamData = {teamData} getSelectedTeamsSeasonData = {getSelectedTeamsSeasonData}/>)
  }

  return (
    <div class='dropdown'>
      <button class='dropbtn'>Teams</button>
      <div id='myDropdown' class='dropdown-content'>
        {listTeams(NBAAllTeamData)}
      </div>
    </div>
  )
}
