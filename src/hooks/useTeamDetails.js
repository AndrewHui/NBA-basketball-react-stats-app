import {useState, useEffect} from 'react'
import axios from 'axios'

export default function useTeamDetails() {

  const [NBAAllTeamData, setNBAAllTeamData] = useState([])
  const [selectedTeamID, setSelectedTeamID] = useState()
  const [selectedTeamsSeasonData, setSelectedTeamsSeasonData] = useState([])

  const getSelectedTeamsSeasonData = async (teamID) => {
    setSelectedTeamID(teamID)
    const data = await axios.get(`https://www.balldontlie.io/api/v1/games?seasons[]=2019&team_ids[]=${teamID}`)
    setSelectedTeamsSeasonData(data.data.data)
  }

  useEffect(async () => {
    const NBAAllTeamData = await axios.get('https://www.balldontlie.io/api/v1/teams')
    setNBAAllTeamData(NBAAllTeamData.data.data)
  }, [])


  return {
    selectedTeamsSeasonData, 
    getSelectedTeamsSeasonData,
    NBAAllTeamData, 
    selectedTeamID
  }
}