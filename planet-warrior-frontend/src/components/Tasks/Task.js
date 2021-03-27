import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    border-radius: 3%;
`
const LocationImage = styled.div`
    text-align: left;
    padding-left: 20px;
    img{
        height: 80px;
        width: 80px;
        border-radius: 100%;
        border: 5px solid #efefef;
    }
`

const Type = styled.div`
    color: grey;
    text-align: left;
    padding: 0 0 0 20px;
`

const Title = styled.div`
    font-size: 24px;
    color: green;
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
    padding: 20px 0 10px 20px;
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
    display: inline-block;
    background: white;
    color: white;
    border: 1px solid grey;
    padding: 5px 5px;
    margin: 5px 5px 5px;
    border-radius: 0px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;

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
            
            {/* <Btn>
                🖤
            </Btn> */}
            <Date> Expiration Date: {props.item.deadline} </Date>

        </Card>
    )
}

export default Location
