import React from 'react'

const Education = () => {
  return (
    <div className='container-padre-edu'>

        <div className="container-education-cards">
            <div className="container-education-card">
                <div className="container-title-date-edu">
                    <p className='title-institute'>Juan Amos Comenio Institute</p>
                    <p className='title-date'>March 2022- December 2023</p>
                </div>
                <div className='container-title-degree'>
                    <p className='title-degree'>System Technician</p>
                </div>
            </div>
            <div className="container-education-card">
                <div className="container-title-date-edu">
                    <p className='title-institute'>E.C.E.A Institute</p>
                    <p className='title-date'>2015 - 2020</p>
                </div>
                <div className='container-title-degree'>
                    <p className='title-degree'>Bachelor's degree in computer science</p>
                </div>
            </div>
            <div className="container-education-card">
                <div className="container-title-date-edu">
                    <p className='title-institute'>Oracle Allura Latam 2024</p>
                    <p className='title-date'>2024 - Present</p>
                </div>
                <div className='container-title-degree'>
                    <p className='title-degree'>Backend specialization</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education