import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import { FaGlobeAmericas } from 'react-icons/fa'
import Landscape2 from '../../images/nature_landscape.jpg'
import LandscapeRoad from '../../images/landscape-road.jpg'


export const Nav = styled.nav`
    background: url(${Landscape2});
    background: -position: center;
    background-repeat: no-repeat; 
    background-size: cover; 
    width: 100%; 
    height: 30vh;
    justify-content: flex-start; 
    font-weight: 100;
`

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    padding: 0 1rem; 

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`


export const Bars = styled(FaGlobeAmericas)`
    font-size: 2rem;
    transform: translate(-50%, 15%);
`


export const NavMenu = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none; 
  }
`