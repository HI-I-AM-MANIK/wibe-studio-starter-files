import React from 'react'
import styled from 'styled-components'
import MainVideo from '../assets/Walking Girl.mp4'

const VideoContainer = styled.section`
width:100%;
height:100vh;
position:relative;
video{
    width: 100%;
    height: 100vh;
    object-fit:cover;
}
`

const DarkOverLay = styled.div`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
z-index:1;

background-color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
`

const Title = styled.div`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
z-index:1;

display: flex;
justify-content:center;
align-items:center;
color: ${props => props.theme.text};
div{
    display:flex;
}
h1{
    font-family:'Kaushan Script';
    font-size:${props => props.theme.fontBig}
}
h2{
    font-family:'Kaushan Script';
    font-size:${props => props.theme.font};


}
`
 
const Covervideo = () => {
  return (
    <VideoContainer>
        <DarkOverLay/>
        <Title>
            <div data-scroll data-scroll-speed="2">
                <h1>Wibe  </h1><br></br>
            <h2 data-scroll data-scroll-delay='0.04' data-scroll-speed='4'>Inspire.Create.Believe</h2>
            </div>
        </Title>
        <video src = {MainVideo} type="video/mp4 " autoPlay muted loop />
    </VideoContainer>
  )
}

export default Covervideo
