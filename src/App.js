import React from 'react'
import './App.css'
import useTeamDetails from './hooks/useTeamDetails'
import TeamDropdown from './components/teamDropDown/teamDropdown'
import TeamSelected from './components/teamSelected'
import GridTables from './components/Tables/GridTables'

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
        <TeamDropdown NBATeamData = {NBATeamData} setTeamID = {updateSelectedTeamsSeasonData}/>
        <TeamSelected NBATeamData = {NBATeamData} selectedTeamID = {selectedTeamID}/>
      </header>
        <GridTables selectedTeamID = {selectedTeamID} NBATeamData = {NBATeamData} selectedTeamsSeasonData = {selectedTeamsSeasonData}/>
    </div>
  )
}

export default App
