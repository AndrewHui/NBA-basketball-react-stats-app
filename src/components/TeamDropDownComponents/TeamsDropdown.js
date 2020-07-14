import React from 'react'
import TeamLabels from './TeamLabels'

// Scrollable dropdown menu that maps through an array of teams to display all the teams.

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
