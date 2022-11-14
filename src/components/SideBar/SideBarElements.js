import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll'

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: var(--primaryColor) ;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.15s ease-in-out;
    overflow: hidden; 
    opacity: ${({isOpen }) => (isOpen ? '100%' : '0' ) };
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};


`

export const CloseIcon = styled(FaTimes)`
    color: white;

    &:hover {
        color: var(--impactColor);
    }

`

export const Icon = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`


export const SideBarWrapper = styled.div`
    color: black;

`

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }

`

export const SideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.3s ease-in-out;
    color: var(--fourthColor);
    cursor: pointer;

    &:hover {
        color: var(--impactColor);
        transition: 0.2s ease-in-out;
    }
`

