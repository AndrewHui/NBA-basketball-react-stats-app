import React, {useState} from 'react';
import './App.css';
import DashboardStats from './components/dashboardStats'
import useApplicationData from './hooks/useApplicationData'
import TeamDropdown from './components/teamDropDown/teamDropdown'
import PlayerComponent from './components/PlayerComponents/playerComponent'
import GridDisplay from './components/gamesDisplayComponents/gridDisplay'

function App() {
  
  const {teamOneNBAData, updateTeamOneNBAData, teamTwoNBAData, updateTeamTwoNBAData, NBAPlayerData, getNBAPlayerData, NBATeamData, getNBATeamData, teamIDOne, setTeamIDOne, teamIDTwo, setTeamIDTwo} = useApplicationData()


  console.log("TeamOne",  teamIDOne)
  console.log("TeamONE DATA", teamOneNBAData)

  return (
    <div className="App">
      <DashboardStats getNBAPlayerData = {getNBAPlayerData} getNBATeamData = {getNBATeamData}/>
      <TeamDropdown NBATeamData = {NBATeamData} dropdownName = 'Team List 1' setTeamID = {updateTeamOneNBAData}/>
      <PlayerComponent NBAPlayerData = {NBAPlayerData}/>
      <TeamDropdown NBATeamData = {NBATeamData} dropdownName = 'Team List 2' setTeamID = {updateTeamTwoNBAData}/>
      <GridDisplay teamOneNBAData = {teamOneNBAData} teamIDOne = {teamIDOne} NBATeamData = {NBATeamData}/>

    </div>
  );
}

export default App;
