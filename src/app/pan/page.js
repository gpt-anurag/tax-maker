import React from 'react'
import SectionContainer from '../components/SectionContainer'
import AboutSection from '../components/AboutSection'

const Pan = () => {
  return (
    <>
      <SectionContainer>
        <AboutSection title={'Intro'} id={'intro'} />
        <AboutSection title={'Benefits'} id={'benefits'} />
        <AboutSection title={'Documents'} id={'documents'} />
        <AboutSection title={'FAQ'} id={'faq'} />
      </SectionContainer>
    </>
  )
}

export default Pan
