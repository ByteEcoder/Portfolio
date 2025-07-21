import React,{useState}from 'react'
import '../styles/Quali.css'
const Quali = () => {

    const [toggleState,setToggleState]=useState(1);

    const toggleTab=(index)=>{
        setToggleState(index);
    };
  return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
           <span className="section__subtitle"></span>    {/*   message here */}
       
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1?"qualification__button qualification__active button--flex" :"qualification__button button--flex"}onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>
                    {/* use it in future */}
                    {/* <div className={toggleState === 2?"qualification__button qualification__active button--flex" :"qualification__button button--flex"}onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div> */}  
                </div>
            </div>
       
            <div className="qualification__sections">
                <div className={toggleState===1?"qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Higher Secondary (XII)</h3>
                            <span className="qualification__subtitle">ISC board</span>

                            <div className="qualification__calander">
                                <i class="uil uil-calendar-alt"></i>
                                2022
                            </div> 
                        </div>
                    
                        <div>
                            <span className="qualification__rounder"></span>

                            <span className="qualification__line"></span>
                                        
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                                        
                        </div>

                         <div>
                            <h3 className="qualification__title">B.Tech</h3>
                            <span className="qualification__subtitle">Galgotias University</span>

                            <div className="qualification__calander">
                                <i class="uil uil-calendar-alt"></i>
                                2023-Present
                            </div> 
                        </div> 
                    
                        
                    </div>


                     {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Tech</h3>
                            <span className="qualification__subtitle">Galgotias University</span>

                            <div className="qualification__calander">
                                <i class="uil uil-calendar-alt"></i>
                                2023-Present
                            </div> 
                        </div>
                    
                        <div>
                            <span className="qualification__rounder"></span>

                            <span className="qualification__line"></span>
                                        
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                                        
                        </div>

                        <div>
                            <h3 className="qualification__title">UX expert</h3>
                            <span className="qualification__subtitle">xyz company</span>

                            <div className="qualification__calander">
                                <i class="uil uil-calendar-alt"></i>
                                2023-Present
                            </div> 
                        </div>
                    
                        
                    </div> */}
                </div>


                 <div className={toggleState===2?"qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Product Designer</h3>
                            <span className="qualification__subtitle">AT xyz company</span>

                            <div className="qualification__calander">
                                <i class="uil uil-calendar-alt"></i>
                                2023-Present
                            </div> 
                        </div>
                    
                        <div>
                            <span className="qualification__rounder"></span>

                            <span className="qualification__line"></span>
                                        
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                                        
                        </div>

                        <div>
                            <h3 className="qualification__title">Ux designer</h3>
                            <span className="qualification__subtitle">xyz company</span>

                            <div className="qualification__calander">
                                <i class="uil uil-calendar-alt"></i>
                                2023-Present
                            </div> 
                        </div>
                    
                        
                    </div>


                     <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Developer</h3>
                            <span className="qualification__subtitle">xyz company</span>

                            <div className="qualification__calander">
                                <i class="uil uil-calendar-alt"></i>
                                2023-Present
                            </div> 
                        </div>
                    
                        <div>
                            <span className="qualification__rounder"></span>

                            <span className="qualification__line"></span>
                                        
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                                        
                        </div>

                        <div>
                            <h3 className="qualification__title">UX expert</h3>
                            <span className="qualification__subtitle">xyz company</span>

                            <div className="qualification__calander">
                                <i class="uil uil-calendar-alt"></i>
                                2023-Present
                            </div> 
                        </div>
                    
                        
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Quali