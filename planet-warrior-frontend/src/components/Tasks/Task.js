import React, {useState} from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import {FaHeart} from "react-icons/fa";
import {FaCheck} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";
import {FaHourglassStart} from "react-icons/fa";
import { icons } from 'react-icons/lib';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


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
const Icons = styled.div`
    display: flex;
    justify-content: left;
`



function Location({task, setCurrentUser, currentUser, captain}) {

     const [open, setOpen] = useState(false);

    const handleAddTask = () => {
            fetch(`https://planetwarriors.herokuapp.com/newtask`, {
            method: "POST",
            headers: {"Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`},
            body: JSON.stringify({task_id: task.id})})
            .then(res => res.json())
            .then(() => {
            setCurrentUser({...currentUser, pending_tasks: [...currentUser.pending_tasks, task]})
            })
    }

    const handleCheckTask = () => {
            fetch(`https://planetwarriors.herokuapp.com/checktask`, {
            method: "POST",
            headers: {"Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`},
            body: JSON.stringify({task_id: task.id})})
            .then(res => res.json())
            .then(() => {
            // let user_points = currentUser.complete_tasks.reduce((a,b) => a + b, 0)
            // let former_captain = captain
            // if (user_points + task.point > former_captain.point) {
            //     setTimeout(() => setOpen(true) , 3000)
            // }

            setCurrentUser({...currentUser, pending_tasks: currentUser.pending_tasks.filter(t => t.id !== task.id),
                                            complete_tasks: [...currentUser.complete_tasks, task]})

            
            }
        )}


    return (
        <Card>
            <Point> +{task.point} POINTS </Point>
            <LocationImage>
                {task.name === "plant tree" ? 
                <img src="./tree.svg" alt=""/>
                : task.name === "pick up trash" ? 
                <img src="./trash.svg" alt=""/>
                : <img src="./bottle-1.svg" alt=""/>
            }
            </LocationImage>
            <Type>Task</Type>
            <Title>{task.name}</Title>
            <TaskDetails>Max participants: {task.max_user}</TaskDetails>
            
                {/* <div onClick={handleAddTask}><Heart></Heart></div> */}
                {
                currentUser && currentUser.complete_tasks.find(t=> t.id === task.id) ? 
                <div style={{color: 'red'}}><Complete></Complete></div>
                : currentUser && currentUser.pending_tasks.find(t=> t.id === task.id) ? 
                <Icons> 
                    <div ><HourglassStart></HourglassStart></div>
                    <div onClick={handleCheckTask}><Complete></Complete></div>
                 </Icons>
                 : currentUser ?
                <Icons> 
                    <div onClick={handleAddTask}><Plus></Plus></div>
                 </Icons>
                 : 
               null
                }
            
              <Modal open={open} onClose={()=> setOpen(false)} center>
                 <h2>Simple centered modal</h2>
             </Modal>

            {/* <Btn>
                🖤
            </Btn> */}
            <Date> Expiration Date: {task.deadline} </Date>

        </Card>
    )
}

export default Location
