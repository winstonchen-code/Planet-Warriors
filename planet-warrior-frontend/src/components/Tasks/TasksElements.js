import styled from'styled-components'
import {FaHeart} from "react-icons/fa";
import {FaCheck} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";
import {FaHourglassStart} from "react-icons/fa";

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
    grid-column: 1; 
    grid-gap: 20px;
    width: 100%;
`
export const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 6fr 4fr;
    grid-gap: 20px;
    width: 100%;
`
export const GridMap = styled.div`
    display: grid;
    display-column: 2;
    grid-template-columns: 6fr 4fr;
    grid-gap: 20px;
    width: 100%;
`

export const Card = styled.div`
    border: 2px solid #efefef;
    background: #fff;
    border-radius: 3%;
    border-top: 10px solid #229955;
`
export const LocationImage = styled.div`
    position: relative;
    text-align: left;
    padding-left: 20px;
    img{
        height: 80px;
        width: 80px;
        border-radius: 100%;
        border: 3px solid #229955;
    }
`

export const Type = styled.div`
    color: grey;
    text-align: left;
    padding: 0 0 0 20px;
`

export const Title = styled.div`
    font-size: 24px;
    color: #465E73;
    text-align: left;
    padding: 0 0 0 20px;
`

export const TaskDetails = styled.div`
    text-align: left;
    padding: 0 0 0 20px;
`

export const Point = styled.div`
    margin: 0px 20px 0px 0px;
    text-align: right;
    padding: 20px 0 10px 20px;
`

export const Date = styled.div`
    margin: 0px 20px 0px 0px;
    text-align: right;
    padding: 10px 0 10px 10px;
`

export const LinkWrapper = styled.div`
    text-align: left;
    margin: 20px 20px 20px 20px;
    height: 30px;
    a {
        color: black;
        background: white;
        border-radius: 20%;
        padding: 5px 5px 5px 5px;
        border: 1px solid grey;
        width: 100%;
        text-decoration: none;
    }
`

export const Btn = styled.div`
    text-align: center;
    // position: center;
    display: inline-flex;
    background: white;
    color: black;
    border: 1px solid grey;
    padding: 5px 5px;
    margin: 5px 5px 5px;
    border-radius: 10%;
    cursor: pointer;
    text-decoration: none;
`

export const Complete = styled(FaCheck)`
    // display: inline-block;
    font-size: 2rem;
    border: 1px solid grey;
    padding: 5px 5px;
    margin: 10px 5px 0px 20px;
    border-radius: 10%;
`
export const Plus = styled(FaPlus)`
    // display: inline-block;
    font-size: 2rem;
    border: 1px solid grey;
    padding: 5px 5px;
    margin: 10px 5px 0px 20px;
    border-radius: 10%;
`
export const HourglassStart = styled(FaHourglassStart)`
    // display: inline-block;
    font-size: 2rem;
    border: 1px solid grey;
    padding: 5px 5px;
    margin: 10px 5px 0px 20px;
    border-radius: 10%;
`
export const Icons = styled.div`
    display: flex;
    justify-content: left;
`
