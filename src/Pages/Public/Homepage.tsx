import React from 'react';
import Section1 from '../../Components/Public/Homepage/Section1';
import Section2 from '../../Components/Public/Homepage/Section2';
import About_us from '../../Components/Public/Homepage/About_us';
import Navbar from '../../Components/Nav/Navbar';
import CustomNav from '../../Components/CustomNav';
import JoinUs from '../../Components/Public/Homepage/JoinUs';
const Homepage: React.FC = () => {
  return (
   
      <div className="space-y-0">
       <CustomNav></CustomNav>
        <Section1 />
        <About_us/>
        <Section2 />
        <JoinUs></JoinUs>
      </div>
    
  );
};

export default Homepage;