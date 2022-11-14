import React, {useEffect, useState} from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import { FaBars } from "react-icons/fa";
import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    useEffect( () => {
        window.addEventListener("scroll", changeNav)

    }, [] )

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/rubinwebpage" onClick={toggleHome}>IATE@LSST/Rubin</NavLogo>
                <MobileIcon onClick={toggle} >
                    <FaBars color='white' />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="detalles"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >Detalles</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="inscripcion"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >Inscripción</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="participantes"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >Participantes</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="programa"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >Programa</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar