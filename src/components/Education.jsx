import React from 'react'
import EducationCard from './EducationCard'


const Education = () => {
  return (
    <div className='container-padre-edu'>

        <div className="container-education-cards">

        {<EducationCard institute = "Oracle Allura Latam 2024" date = "2024 - present" formation = "Backend specialization" /> }
        {<EducationCard institute = "Juan Amos Comenio Institute" date = "March 2022- December 2023" formation = "System Technician" /> }
        {<EducationCard institute = "E.C.E.A Institute" date = "2015 - 2020" formation = "High School Diploma in Computer Science" /> }
            
        </div>
    </div>
  )
}

export default Education