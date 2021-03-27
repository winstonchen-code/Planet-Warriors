import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaGlobeAmericas} from 'react-icons/fa'

export const Nav = styled.nav`
    background: green;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`

export const NavIcon = styled.div`
    display: blocl;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold; 
    }
`

export const Bars = styled(FaGlobeAmericas)`
    font-size: 2rem;
    transform: translate(-50%, 15%);
`


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  
  @media screen and (max-width: 768px) {
    display: none; 
  }
`