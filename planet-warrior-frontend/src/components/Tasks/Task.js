import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import {FaHeart} from "react-icons/fa";
import {FaCheck} from "react-icons/fa";
import { icons } from 'react-icons/lib';


const Card = styled.div`
    border: 2px solid #efefef;
    background: #fff;
    border-radius: 3%;
    border-top: 10px solid #229955;
`
const LocationImage = styled.div`
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

const Type = styled.div`
    color: grey;
    text-align: left;
    padding: 0 0 0 20px;
`

const Title = styled.div`
    font-size: 24px;
    color: #465E73;
    text-align: left;
    padding: 0 0 0 20px;
`

const TaskDetails = styled.div`
    text-align: left;
    padding: 0 0 0 20px;
`

const Point = styled.div`
    margin: 0px 20px 0px 0px;
    text-align: right;
    padding: 20px 0 10px 20px;
`

const Date = styled.div`
    margin: 0px 20px 0px 0px;
    text-align: right;
    padding: 10px 0 10px 10px;
`

const LinkWrapper = styled.div`
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

const Btn = styled.div`
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
export const Heart = styled(FaHeart)`
    font-size: 2rem;
    border: 1px solid grey;
    padding: 5px 5px;
    margin: 10px 5px 0px 20px;
    border-radius: 10%;
`

export const Complete = styled(FaCheck)`
    // display: inline-block;
    font-size: 2rem;
    border: 1px solid grey;
    padding: 5px 5px;
    margin: 10px 5px 0px 20px;
    border-radius: 10%;
`
const Icons = styled.div`
    display: flex;
    justify-content: left;
`


function Location(props) {
    return (
        <Card>
            <Point> +{props.item.point} POINTS </Point>
            <LocationImage>
                <img src={props.item.image_url} alt={props.item.city}/>
            </LocationImage>
            <Type>Task</Type>
            <Title>{props.item.name}</Title>
            <TaskDetails>Max participants: {props.item.max_user}</TaskDetails>
            <Icons>
            <Heart></Heart><Complete></Complete>
            </Icons>
            <Date> Expiration Date: {props.item.deadline} </Date>

        </Card>
    )
}

export default Location
