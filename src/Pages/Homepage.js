import React from 'react'
import Navbar from '../Components/Navbar';
import MainTop from '../Components/MainTop';
import Maincenter from '../Components/Maincenter';
import MainBottom from '../Components/MainBottom';
import BestTeam from '../Components/BestTeam';
import Timeline from '../Components/Timeline';
import Makework from '../Components/Makework';
import Everyday from '../Components/Everyday';
import Customers from '../Components/Customers';
import Mobileapps from '../Components/Mobileapps';
import Footer from '../Components/Footer';

export default function Homepage() {
  return (
    <div className='App w-[1920px] h-[4400px]'>
      <Navbar/>
      <MainTop/>
      <Maincenter/>
      <MainBottom/>
      <BestTeam/>
      <Timeline/>
      <Makework/>
      <Everyday/>
      <Customers/>
      <Mobileapps/>
      <Footer/>
    </div>
  );
  
}
