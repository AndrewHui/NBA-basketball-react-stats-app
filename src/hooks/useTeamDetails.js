import {useState, useEffect} from 'react'
import axios from 'axios'

export default function useTeamDetails() {

  const [NBAAllTeamData, setNBAAllTeamData] = useState({
    data: [],
    statusCode: 200,
    statusText: ''
  })
  const [selectedTeamID, setSelectedTeamID] = useState()
  const [selectedTeamsSeasonData, setSelectedTeamsSeasonData] = useState({
    data: [],
    statusCode: 200,
    statusText: ''
  })

  const getSelectedTeamsSeasonData = async (teamID) => {
    try {
      setSelectedTeamID(teamID)
      const response = await axios.get(`https://www.balldontlie.io/api/v1/games?seasons[]=2019&team_ids[]=${teamID}`)
      setSelectedTeamsSeasonData(previousState => ({
        ...previousState,
        data: response.data.data,
        statusCode: response.status,
        statusText: response.statusText
      }))
    }
    catch(response) {
      setSelectedTeamsSeasonData(previousState => ({
        ...previousState,
        statusCode: response.status,
        statusText: response.statusText
      }))
    }
  }

  useEffect(async () => {
    try {
      const NBAAllTeamDataResponse = await axios.get('https://www.balldontlie.io/api/v1/teams')

      setNBAAllTeamData(previousState => ({
        ...previousState, 
        data: NBAAllTeamDataResponse.data.data,
        statusCode: NBAAllTeamDataResponse.status,
        statusText: NBAAllTeamDataResponse.statusText
      }))
    }
    catch(response) {
      setNBAAllTeamData(previousState => ({
        ...previousState, 
        statusCode: response.status,
        statusText: response.statusText}
      ))
      throw new Error(`${NBAAllTeamData.statusCode} error: ${NBAAllTeamData.statusText}`)
    }
  }, [])

  return {
    selectedTeamsSeasonData, 
    getSelectedTeamsSeasonData,
    NBAAllTeamData, 
    selectedTeamID
  }
}