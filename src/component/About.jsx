import React from 'react';
import { Container } from 'react-bootstrap';
import '../css/About.css'; // Import your custom CSS for styling
import Img from '../assets/Images/01725874024.JPG';
import Skills from '../component/Skills';
import Resume from '../component/Resume';
import Contact from './Contact';
import AccordionSection from './EducationExperience';

const AboutHero = () => {
  return (
    <div className="hero-container">
      <Container fluid>
        <div className="circle-image" src={Img}></div>
        <h1 className="hero-headline">MD NASIR UDDIN <br /> <span className='mt-2 pt-2'>Software Engineer</span></h1>
      </Container>

      <Skills />
      <Resume />
      <AccordionSection />
      <Contact />
    </div>
  );
};

export default AboutHero;
