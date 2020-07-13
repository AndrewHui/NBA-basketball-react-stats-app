import {useState, useEffect} from 'react'
import axios from 'axios'



export default function GetDashboardData() {

  const [NBAPlayerData, setNBAPlayerData] = useState([])
  const [NBATeamData, setNBATeamData] = useState([])
  const [teamIDOne, setTeamIDOne] = useState()
  const [teamOneNBAData, setTeamOneNBAData] = useState([])
  const [game, setGame] = useState({})
  const [gameDetails, setGameDetails] = useState([])

  const updateTeamOneNBAData = async (teamID) => {
    setTeamIDOne(teamID)
    const data = await axios.get(`https://www.balldontlie.io/api/v1/games?seasons[]=2019&team_ids[]=${teamID}`)
    console.log("hello", data.data.data)
    setTeamOneNBAData(data.data.data)
  }

  const updateGameDetails = async (gameID) => {
    const data = await axios.get(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameID}`)
    setGameDetails(data.data.data)

  }

  const getNBAPlayerData = async () => {
    const data = await axios.get('https://www.balldontlie.io/api/v1/players')
    setNBAPlayerData(data.data)
    console.log(data)
    return data
  }

  const getNBATeamData = async () => {
    const data = await axios.get('https://www.balldontlie.io/api/v1/teams')
    setNBATeamData(data.data)
    console.log(data)
    return data
  }

  useEffect(async () => {
    const NBADataAPI = await Promise.all([axios.get('https://www.balldontlie.io/api/v1/teams'), axios.get('https://www.balldontlie.io/api/v1/teams')])

    setNBATeamData(NBADataAPI[0].data.data)
    setNBAPlayerData(NBADataAPI[1].data.data)
  }, [])


  return {game, setGame, teamOneNBAData, updateTeamOneNBAData, NBAPlayerData, getNBAPlayerData, NBATeamData, getNBATeamData, teamIDOne, setTeamIDOne, updateGameDetails, gameDetails}
}