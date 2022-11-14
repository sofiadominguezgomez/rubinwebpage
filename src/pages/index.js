import React, { useState } from 'react'
import Banner from '../components/Banner';
import Details from '../components/Details';
import InfoSection from '../components/InfoSection';
import { homeObjFourth, homeObjThird, homeObjTwo } from '../components/InfoSection/data';
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Banner />
        <Details />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThird} />
        <InfoSection {...homeObjFourth} />
    </>
  )
}

export default Home