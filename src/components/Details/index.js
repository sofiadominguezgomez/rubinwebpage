import React from 'react'
import Location from '../../media/location.svg'
import Calendar from '../../media/calendar.svg'
import Modalidad from '../../media/modalidad.svg'
import { DetailContainer, DetailH1, DetailWrapper, DetailCard,
    DetailIcon, DetailH2, DetailP
 } from './DetailElements';

const Details = () => {
  return (
    <DetailContainer id="detalles">
        <DetailH1> Información del evento </DetailH1>
        <DetailWrapper>
            <DetailCard>
                <DetailIcon src={Location} />
                <DetailH2>Ubicación</DetailH2>
                <DetailP> IATE, OAC, Córdoba </DetailP>
            </DetailCard>
            <DetailCard>
                <DetailIcon src={Calendar} />
                <DetailH2>Fecha</DetailH2>
                <DetailP> Jueves 1 y Viernes 2 de diciembre, 2022 </DetailP>
            </DetailCard>
            <DetailCard>
                <DetailIcon src={Modalidad} />
                <DetailH2>Modalidad</DetailH2>
                <DetailP> Modalidad mixta: remoto y presencial </DetailP>
            </DetailCard>
        </DetailWrapper>
    </DetailContainer>
  )
}

export default Details