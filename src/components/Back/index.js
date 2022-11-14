import React from 'react'
import { BackContainer, BackTitle, BackIcon } from './BackElements'
import { useNavigate} from 'react-router-dom'

const Back = () => {

    const navigate = useNavigate();

  return (
    <BackContainer>
        <BackTitle> Volver </BackTitle>
        <BackIcon onClick={ () => navigate(-1) } />
    </BackContainer>
  )
}

export default Back