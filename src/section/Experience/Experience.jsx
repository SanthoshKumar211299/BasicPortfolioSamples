import React from 'react'
import styles from './Experience.module.css'
import ExperienceCard from '../../common/ExperienceCard'
const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
        <h1>Experience</h1>
        <div>
      <ExperienceCard  
      h2= 'Software Developer & QA Support'
      h3='CHUBB || Excess Casualty'
      h4={'Jan 2022 to Apr 2023'}
      p='Designed and implemented a casualty insurance application using Duck Creek
Technologies, enhancing policy management . Leveraged Duck Creek’s suite of tools to
streamline workflows and improve data accuracy. Increased operational efficiency by
25% through custom automation and integration' />
</div>
<div>
<ExperienceCard  
      h2= 'Software Developer'
      h3='CHUBB || Large Property Transformation'
      h4={'Apr 2023 to Aug 2023'}
      p='Designed and implemented a casualty insurance application using Duck Creek
Technologies, enhancing policy management . Leveraged Duck Creek’s suite of tools to
streamline workflows and improve data accuracy. Increased operational efficiency by
25% through custom automation and integration' />
</div>
    </section>
  )
}

export default Experience
