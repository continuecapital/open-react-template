import React from 'react'
// import sections
import Hero from '../components/sections/Hero'
import FeaturesTiles from '../components/sections/FeaturesTiles'
import FeaturesSplit from '../components/sections/FeaturesSplit'
import Testimonial from '../components/sections/Testimonial'
// import Cta from '../components/sections/Cta'
import Portfolio from '../components/sections/Portfolio'
import Contact from '../components/sections/Contact'

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles id="about" />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial id="team" topDivider />
      <Portfolio id="portfolio" invertMobile topDivider />
      <Contact id="contact" invertMobile topDivider />
      {/* <Cta split /> */}
    </>
  )
}

export default Home
