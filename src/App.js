import React from 'react'
import './App.css'
import useTeamDetails from './hooks/useTeamDetails'
import TeamsDropdown from './components/TeamDropDownComponents/TeamsDropdown'
import TeamSelected from './components/TeamSelected'
import NBADataTables from './components/TablesComponents/NBADataTables'
import ErrorComponent from './components/ErrorComponent'
import {assessStatusCode} from './util/helper'

function App() {

  // Split web app into two parts: team selection and table stats.  Team selection won't load if error in API. Data tables manage error handling in next component.

  const {
    selectedTeamsSeasonData, 
    getSelectedTeamsSeasonData, 
    NBAAllTeamData, 
    selectedTeamID
  } = useTeamDetails()

  return (
    <div className='App'>
      {assessStatusCode(NBAAllTeamData.statusCode) ? (
        <header>
          <TeamsDropdown NBAAllTeamData = {NBAAllTeamData.data} getSelectedTeamsSeasonData = {getSelectedTeamsSeasonData}/>
          <TeamSelected NBAAllTeamData = {NBAAllTeamData.data} selectedTeamID = {selectedTeamID}/>  
        </header> 
      ) : (
        <ErrorComponent/>
      )}

      <NBADataTables selectedTeamID = {selectedTeamID} NBAAllTeamData = {NBAAllTeamData.data} selectedTeamsSeasonData = {selectedTeamsSeasonData}/>
    </div>
  )
}

export default App
