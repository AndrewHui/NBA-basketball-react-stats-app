import {useState} from 'react'
import axios from 'axios'

export default function useGameStats() {

  const [gameStats, setGameStats] = useState({
    data: [],
    statusCode: 200,
    statusText: ''
  })

  const getGameStats = async (gameID) => {
    try {
      const gameStatsResponse = await axios.get(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameID}`)
      setGameStats(previousState => ({
        ...previousState,
        data: gameStatsResponse.data.data,
        statusCode: gameStatsResponse.status,
        statusText: gameStatsResponse.statusCode
      }))
    }
    catch(gameStatsResponse) {
      setGameStats(previousState => ({
        ...previousState,
        statusCode: gameStatsResponse.status,
        statusText: gameStatsResponse.statusCode
      }))
    }
  }

  return {
    getGameStats, 
    gameStats
  }
}