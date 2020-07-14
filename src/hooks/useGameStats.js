import {useState} from 'react'
import axios from 'axios'

export default function useGameStats() {

  const [gameStats, setGameStats] = useState([])

  const getGameStats = async (gameID) => {
    const data = await axios.get(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameID}`)
    setGameStats(data.data.data)
  }

  return {
    getGameStats, 
    gameStats
  }
}