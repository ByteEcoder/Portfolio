import React from 'react'
import '../styles/ScrollUp.css'
const ScrollUp = () => {
    window.addEventListener("scroll",function()
    {
        const scrollUp=document.querySelector(".scrollup");
        if (this.scrollY>=700) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll")
        
    })
  return (
    
         <a href="#" className="scrollup">
            <i class='uil uil-arrow-up scrollup__icon '>Up</i>
            
            </a>
    
  )
}

export default ScrollUp