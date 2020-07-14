import {useState} from 'react'
import axios from 'axios'

export default function useGameDetails() {

  const [gameDetails, setGameDetails] = useState([])

  const updateGameDetails = async (gameID) => {
    const data = await axios.get(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameID}`)
    setGameDetails(data.data.data)
  }

  return {
    updateGameDetails, 
    gameDetails
  }
}