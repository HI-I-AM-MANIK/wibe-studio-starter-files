import React from 'react'
import styled from 'styled-components'
import Covervideo from '../components/Covervideo'

const Section = styled.section`
    position:relative;
    min-height:200vh;
    overflow:hidden;
    font-color:cyan;
`
const Home = () => {
  return (
    <Section>
        <Covervideo/>
        <h1>Navbar</h1>
        <h1>Logo</h1>
    </Section>
  )
}

export default Home
