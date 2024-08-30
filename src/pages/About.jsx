import React from 'react';
import AboutHeroSection from '../components/AboutComponents/AboutHeroSection';
import Mission from '../components/AboutComponents/Mission';
import WhyApexload from '../components/AboutComponents/WhyApexload';
import Solutions from '../components/AboutComponents/Solutions';
import Challenge from '../components/AboutComponents/Challenge';
import Member from '../components/AboutComponents/Member';


const About = () => {
  return (
    <div className="bg-black min-h-screen">
      <AboutHeroSection />
      <Mission />
      <WhyApexload/>
      <Solutions/>
      <Challenge/>
      <Member/>
    </div>
  );
};

export default About;
