import React from 'react'
import '../styles/Home.css';
import Social from './Social';
import Data from '../components/Data';
import Scroll from '../components/Scroll';

const Home = () => {
  return (
    <section className="home section">
        <div className="home__container container grid">
            <div className="home__content grid"> 
                <Social />
                
                <div className="home__img"></div>
                <Data />
            </div>
            <Scroll />
          </div>
        

    </section>
  )
}

export default Home