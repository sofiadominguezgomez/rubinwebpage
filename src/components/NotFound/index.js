import React from 'react'
import Back from '../Back'
import { NotFoundContainer, NotFoundTitle, NotFoundImg, ImgWrap } from './NotFoundElements'
import Error from '../../media/404.png'

const NotFound = () => {
  return (
    <>
      <Back />
      <NotFoundContainer>

        <NotFoundTitle> ¡Estamos trabajando en esto! </NotFoundTitle>
        <ImgWrap>
          <NotFoundImg src={Error} alt="404 Cat" />
        </ImgWrap>
        
      </NotFoundContainer>
    </>
  )
}

export default NotFound