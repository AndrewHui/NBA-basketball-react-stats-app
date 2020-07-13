import React, {useState} from 'react';
import './App.css';
import useApplicationData from './hooks/useApplicationData'
import TeamDropdown from './components/teamDropDown/teamDropdown'
import GridDisplay from './components/gamesDisplayComponents/gridDisplay'
import PlayerGridDisplay from './components/playerDisplay/playerGridDisplay'
import TeamSelected from './components/teamSelected'

function App() {
  
  const {game, setGame, teamOneNBAData, updateTeamOneNBAData, NBATeamData, teamIDOne, updateGameDetails, gameDetails} = useApplicationData()


  return (
    <div className="App">
      <header>
        <TeamDropdown NBATeamData = {NBATeamData} setTeamID = {updateTeamOneNBAData}/>
        <TeamSelected NBATeamData = {NBATeamData} teamIDOne = {teamIDOne}/>
      </header>
      <body>
        <GridDisplay teamOneNBAData = {teamOneNBAData} teamIDOne = {teamIDOne} NBATeamData = {NBATeamData} setGame = {setGame} updateGameDetails = {updateGameDetails}/>
        <PlayerGridDisplay gameDetails = {gameDetails}/>
      </body>
    </div>
  );
}

export default App;
