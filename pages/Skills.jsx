import React from 'react'
import "../styles/Skills.css"
import Fskills from '../components/Fskills'
import Bskills from '../components/Bskills'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Skills</span>


        <div className="skills__container container grid">
        <Fskills />
        <Bskills />
        </div>
    </section>
  )
}

export default Skills