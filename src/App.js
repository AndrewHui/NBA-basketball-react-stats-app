import React, {useState} from 'react';
import './App.css';
import useApplicationData from './hooks/useApplicationData'
import TeamDropdown from './components/teamDropDown/teamDropdown'
import GridDisplay from './components/gamesDisplayComponents/gridDisplay'
import PlayerGridDisplay from './components/playerDisplay/playerGridDisplay'

function App() {
  
  const {game, setGame, teamOneNBAData, updateTeamOneNBAData, NBAPlayerData, getNBAPlayerData, NBATeamData, getNBATeamData, teamIDOne, setTeamIDOne, updateGameDetails, gameDetails} = useApplicationData()


  console.log("TeamOne",  teamIDOne)
  console.log("TeamONE DATA", teamOneNBAData)

  return (
    <div className="App">
      <TeamDropdown NBATeamData = {NBATeamData} dropdownName = 'Team List 1' setTeamID = {updateTeamOneNBAData}/>
      <GridDisplay teamOneNBAData = {teamOneNBAData} teamIDOne = {teamIDOne} NBATeamData = {NBATeamData} setGame = {setGame} updateGameDetails = {updateGameDetails}/>
      <PlayerGridDisplay gameDetails = {gameDetails}/>

    </div>
  );
}

export default App;
