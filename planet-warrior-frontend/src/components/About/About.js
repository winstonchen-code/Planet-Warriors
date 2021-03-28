import React from 'react'
import styled from 'styled-components'
import Jumbotron from'./Jumbotron'
import JumbotronOne from'./JumbotronOne'


const Home = styled.div`
    text-align: center;
    background-position: center;
    background-size: cover;
`
const Header = styled.div`
    padding: 10px 10px 10px 100px;
    h1 {
        font-size: 42px;
    }
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`

function About() {

    return (
        <Home>
            
            <Jumbotron/>
            <JumbotronOne/>
        </Home> 
    )
}

export default About