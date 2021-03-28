import React, {useState} from 'react'
import styled from 'styled-components'


// const Section = styled.section`
//     background-color: #2DCC70;
//     min-height: 640px;
//     padding: 10px 100px 0px 20px;
//     color: #fff;
// `

const Header = styled.h1`
    text-align: center;
    color: black;
    font-size: 80px;
`

const Subhead = styled.p`
    font-size: 50px;
    font-weight: 500;
    line-height: 50px;
`

const Section = styled.section`
    width: 100%;
    height: 420px;
    padding: 2rem 0rem;
    justify-content: center;
`;

const Container = styled.div`
    // padding: 3rem calc((100vw - 1300px) /2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
const ColumnLeft = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    line-height: 1.4;
    padding: 2rem 4rem;
    order: ${({reverse}) => (reverse? '2' : '1')};

    h1 {
        margin-bottom: 2.5rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
        font-weight: bold
    }
    
    p {
        margin-bottom: 2rem;
        font-size: 20px;
    }
`

const ColumnRight = styled.div`
    padding: 1rem 4rem;
    order: ${({reverse}) => (reverse? '1' : '2')};
    display: flex;
    justify-content: center;
    // align-items: center;

    @media screen and (max-width: 768px) {
        order: ${({reverse}) => (reverse? '2' : '1')};
    }

    img {
        width: 100%;
        height: 80%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%
        }
    }

`

const Jumbotron = () => {

    return (
        <>
        <Section>
            <Container>
                <ColumnLeft>
                    <Header>Our Mission</Header>
                    <Subhead>We aim to create a future in which nature's wild heart still beats strong through healthy wildlife and magnificent landscapes while our cities are strengthened by harmony with nature.</Subhead>
                </ColumnLeft>
                <ColumnRight>
                    <div className="pt-4 mt-4 text-center">
                         <iframe width="560" height="315" src="https://www.youtube.com/embed/X2YgM1Zw4_E" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </ColumnRight>
            </Container>
        </Section>
        </>
        
        
    )
}

export default Jumbotron