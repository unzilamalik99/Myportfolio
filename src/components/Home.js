import React from 'react';
import Banner from './Banner';
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Services from './Services'
import Contact from './Contact'
import Footer  from './Footer'


export default function Home() {
  return (
<>
<Banner/>
  <About/>
  <Skills/>
  <Project/>
  <Services/>
  <Contact/>
  <Footer/>
</>
  )
}
