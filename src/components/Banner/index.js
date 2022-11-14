import React, { useState } from 'react'
import { BannerContainer, BannerBg, VideoBg,
    BannerContent, BannerH1, HeroP, BannerBtnWrapper, ArrowForward, ArrowRight} from './BannerElements';
import {Button} from '../Button/ButtonElement';
import Video from '../../video/solarSystem.mp4'
const Banner = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!onHover);
    }

  return (
    <BannerContainer>
        <BannerBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </BannerBg>
        <BannerContent>
            <BannerH1>Reunión Anual 2022 Grupo de trabajo Argentino en el Observatorio Vera C. Rubin</BannerH1>
            <HeroP>
                Por favor, rellenar el formulario de inscripción.
            </HeroP>
            <BannerBtnWrapper>
                <Button 
                    to="inscripcion" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="false"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    >
                    Inscribirme { hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </BannerBtnWrapper>
        </BannerContent>
    </BannerContainer>
  )
}

export default Banner