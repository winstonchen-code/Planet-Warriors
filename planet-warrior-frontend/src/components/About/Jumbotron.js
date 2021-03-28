import React, {useState} from 'react'
import styled from 'styled-components'


const Section = styled.section`
    background-color: #2DCC70;
    min-height: 640px;
    padding: 10px 0;
    color: #fff;
`

const Header = styled.h1`
    color: black;
    font-size: 40px;
    line-height: 52px;
`

const Subhead = styled.p`
    font-size: 18px;
    font-weight: 500;
`

const Button = styled.a`
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0;
    background: #fff;
    padding: 10px 20px;
    font-size: 18px;
`

const Jumbotron = () => {

    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const addLog = (log) => {
        console.log(log)
    }
    return (
        <Section className="home-section--1">
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-5">
                        <div className="pt-4 mt-4">
                            <Header>Our Mission</Header>
                            <Subhead>See what's trending around the world.</Subhead>
                        </div>
                    </div>
                    {/* <div className="col col-sm-12 col-md-7">
                        <div className="pt-4 mt-4 text-center">
                         <iframe width="560" height="315" src="https://www.youtube.com/embed/X2YgM1Zw4_E" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div> */}
                </div>
            </div>
        </Section>
    )
}

export default Jumbotron