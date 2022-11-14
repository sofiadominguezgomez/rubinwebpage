import React from 'react'
import {InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    Button,
    AnchorLink

} from './InfoElements';


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, second, description2, route}) => {
    return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText} >{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            {second ? <Subtitle darkText={darkText}>{description2}</Subtitle> : <></>}
                            {route ? <BtnWrap>
                                <Button to={route}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                > {buttonLabel} </Button>
                            </BtnWrap>
                            :
                            <AnchorLink href='https://forms.gle/3GoTLhN9AM9Cy4CWA' 
                            rel="noreferrer noopener" 
                            target="_blank"
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            > {buttonLabel}  </AnchorLink>
                            }
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection