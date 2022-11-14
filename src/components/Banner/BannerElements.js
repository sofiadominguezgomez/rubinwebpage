import styled from 'styled-components';
import '../../App.css'
import {MdArrowForward, MdKeyboardArrowRight} from "react-icons/md";

export const BannerContainer = styled.div`
    background-color: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1000px;
    position: relative;
    z-index: 1;

    :before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }

`

export const BannerBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: green;
`

export const BannerContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8vh 24vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const BannerH1 = styled.h1`
    color: white;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 10vh;
    color: white;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const BannerBtnWrapper = styled.div`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    font-size: 1em;

`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    font-size: 1em;

`