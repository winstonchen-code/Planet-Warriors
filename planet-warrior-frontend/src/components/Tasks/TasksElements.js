import styled from'styled-components'

export const Home = styled.div`
    text-align: center;
    background-position: center;
    background-size: cover;
`
export const Header = styled.div`
    padding: 10px 10px 10px 100px;
    h1 {
        font-size: 42px;
    }
`
export const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    width: 100%;
`

export const MainGrid = styled.div`
    padding: 10px 10px 10px 40px;
    display: grid;
    grid-template-columns: 6fr 4fr;
    grid-gap: 20px;
    width: 100%;
`