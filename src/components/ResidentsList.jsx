import React from 'react'
import ResidentCard from './ResidentCard'
import "./styles/ResidentList.css"

const ResidentsList = ({newPage}) => {
  return (
    <section className='residentList'>
      {newPage()?.map((residentUrl) => (
        <ResidentCard key={residentUrl} residentUrl={residentUrl} />
      ))}
    </section>
  )
}

export default ResidentsList