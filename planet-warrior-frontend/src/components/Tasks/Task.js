import React, {useState} from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import { icons } from 'react-icons/lib';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {Card, LocationImage, Type, Title, TaskDetails, Point, Date, LinkWrapper, Btn, Complete, Plus, Icons, HourglassStart } from './TasksElements'



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
