import React from 'react'


export default function EachTeamDropdown({teamData, setTeamID}) {  

  function handleClick(e) {
    e.preventDefault();
    setTeamID(teamData.id)
  }

  return (
    <a onClick ={handleClick}>{teamData.abbreviation}</a>
  )
}
