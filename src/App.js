import React from 'react'
import './App.css'
import useTeamDetails from './hooks/useTeamDetails'
import TeamsDropdown from './components/TeamDropDownComponents/TeamsDropdown'
import TeamSelected from './components/TeamSelected'
import NBADataTables from './components/TablesComponents/NBADataTables'

function App() {
  
  const {
    selectedTeamsSeasonData, 
    getSelectedTeamsSeasonData, 
    NBAAllTeamData, 
    selectedTeamID
  } = useTeamDetails()

  return (
    <div className="App">
      <header>
        <TeamsDropdown NBAAllTeamData = {NBAAllTeamData} getSelectedTeamsSeasonData = {getSelectedTeamsSeasonData}/>
        <TeamSelected NBAAllTeamData = {NBAAllTeamData} selectedTeamID = {selectedTeamID}/>
      </header>
        <NBADataTables selectedTeamID = {selectedTeamID} NBAAllTeamData = {NBAAllTeamData} selectedTeamsSeasonData = {selectedTeamsSeasonData}/>
    </div>
  )
}

export default App
