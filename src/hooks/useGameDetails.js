import {useState} from 'react'
import axios from 'axios'

export default function useGameDetails() {

  const [teamOneNBAData, setTeamOneNBAData] = useState([])
  const [gameDetails, setGameDetails] = useState([])

  const updateTeamOneNBAData = async (teamID) => {
    setTeamIDOne(teamID)
    const data = await axios.get(`https://www.balldontlie.io/api/v1/games?seasons[]=2019&team_ids[]=${teamID}`)
    setTeamOneNBAData(data.data.data)
  }

  const updateGameDetails = async (gameID) => {
    const data = await axios.get(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameID}`)
    setGameDetails(data.data.data)
  }

  return {teamOneNBAData, updateTeamOneNBAData, NBATeamData, teamIDOne, updateGameDetails, gameDetails}
}