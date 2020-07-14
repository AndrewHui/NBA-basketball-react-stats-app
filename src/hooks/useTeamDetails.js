import {useState, useEffect} from 'react'
import axios from 'axios'

export default function useTeamDetails() {

  const [NBATeamData, setNBATeamData] = useState([])
  const [selectedTeamID, setSelectedTeamID] = useState()
  const [selectedTeamsSeasonData, setSelectedTeamsSeasonData] = useState([])

  const updateSelectedTeamsSeasonData = async (teamID) => {
    setSelectedTeamID(teamID)
    const data = await axios.get(`https://www.balldontlie.io/api/v1/games?seasons[]=2019&team_ids[]=${teamID}`)
    setSelectedTeamsSeasonData(data.data.data)
  }

  useEffect(async () => {
    const NBATeamData = await axios.get('https://www.balldontlie.io/api/v1/teams')
    setNBATeamData(NBATeamData.data.data)
  }, [])


  return {
    selectedTeamsSeasonData, 
    updateSelectedTeamsSeasonData,
    NBATeamData, 
    selectedTeamID
  }
}