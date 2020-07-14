import React from 'react';
import './App.css';
import useTeamDetails from './hooks/useTeamDetails'
import TeamDropdown from './components/teamDropDown/teamDropdown'
import GridDisplay from './components/gamesDisplayComponents/gridDisplay'
import PlayerGridDisplay from './components/playerDisplay/playerGridDisplay'
import TeamSelected from './components/teamSelected'

function App() {
  
  const {teamOneNBAData, updateTeamOneNBAData, NBATeamData, teamIDOne, updateGameDetails, gameDetails} = useTeamDetails()

  return (
    <div className="App">
      <header>
        <TeamDropdown NBATeamData = {NBATeamData} setTeamID = {updateTeamOneNBAData}/>
        <TeamSelected NBATeamData = {NBATeamData} teamIDOne = {teamIDOne}/>
      </header>
      <body>
        <GridDisplay teamOneNBAData = {teamOneNBAData} teamIDOne = {teamIDOne} NBATeamData = {NBATeamData} updateGameDetails = {updateGameDetails}/>
        <PlayerGridDisplay gameDetails = {gameDetails}/>
      </body>
    </div>
  );
}

export default App;
