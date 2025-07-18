import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon'  ></i> 
            <h3 className="about__title">Experince </h3>
            <span className="about__subtitle">NA</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon' ></i>
            <h3 className="about__title">Completed </h3>
            <span className="about__subtitle">5 Projects</span>
        </div>
        
        <div className="about__box">
           <i className='bx bx-support about__icon'></i> 
            <h3 className="about__title">Avaible </h3>
            <span className="about__subtitle"> 24x7</span>
        </div> 
        {/* for more data can add here */}
    </div>
  )
}

export default Info