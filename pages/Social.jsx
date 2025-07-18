import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://github.com/ByteEcoder" className="home__social-icon" target='_blank'>
            <i class="uil uil-github-alt"></i>
        </a>

        <a href="https://www.linkedin.com/in/byteecoder/" className="home__social-icon" target='_blank'>
            <i class="uil uil-linkedin-alt"></i>
        </a>
        
        <a href="mailto:sumit.23scse1410063@galgotiasuniversity.ac.in" className="home__social-icon" target='_blank'>
            <i class="uil uil-envelope"></i>
        </a>
        {/* <a href="no" className="home__social-icon" target='_blank'>
            <i class="uil uil-instagram"></i>
        </a> */}
        {/* add some in future */}
        
    </div>
  )
}

export default Social;