import styled from 'styled-components';
import '../../App.css'
import { FaChevronLeft } from "react-icons/fa";


export const BackContainer = styled.div`
    height: 10vh;
    display: flex;
    width:100%;
    justify-content: space-around;
    align-items: center;
`
export const BackTitle = styled.h1`
    font-size: 2rem;
    color: black;
    
`
export const BackIcon = styled(FaChevronLeft)`
     font-size: 3em;
     cursor: pointer;
`