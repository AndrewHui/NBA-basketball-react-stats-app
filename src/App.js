import React from 'react'
import './App.css'
import useTeamDetails from './hooks/useTeamDetails'
import TeamsDropdown from './components/teamDropDown/TeamsDropdown'
import TeamSelected from './components/teamSelected'
import NBADataTables from './components/Tables/NBADataTables'

function App() {
  
  const {
    selectedTeamsSeasonData, 
    updateSelectedTeamsSeasonData, 
    NBATeamData, 
    selectedTeamID
  } = useTeamDetails()

  return (
    <div className="App">
      <header>
        <TeamsDropdown NBATeamData = {NBATeamData} setTeamID = {updateSelectedTeamsSeasonData}/>
        <TeamSelected NBATeamData = {NBATeamData} selectedTeamID = {selectedTeamID}/>
      </header>
        <NBADataTables selectedTeamID = {selectedTeamID} NBATeamData = {NBATeamData} selectedTeamsSeasonData = {selectedTeamsSeasonData}/>
    </div>
  )
}

export default App
