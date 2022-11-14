import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink } from './SideBarElements'

const SideBar = ({ isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle} >
            <CloseIcon />
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to="detalles" onClick={toggle} > Detalles </SideBarLink>
                <SideBarLink to="inscripcion" onClick={toggle} > Inscripción </SideBarLink>
                <SideBarLink to="participantes" onClick={toggle} > Participantes </SideBarLink>
                <SideBarLink to="programa" onClick={toggle} > Programa </SideBarLink>
            </SideBarMenu>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar