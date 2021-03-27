import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Home, Header, Subheader, Grid, MainGrid, GridMap} from './TasksElements'
import Task from './Task'
import Map from './Map'

const Tasks = () => {
    const [tasks, setTasks] = useState([])

    useEffect (()=> {
        axios.get('https://planetwarriors.herokuapp.com/tasks')
        .then( resp => setTasks(resp.data))
        .catch( resp => console.log (resp) )
    }, [tasks.length])

    const grid = tasks.map( task => {
        return (<Task key={task.id} task={task} > </Task>)
    })

  return (
    <Home>
        <Header>
            <h1>Hello Warriors</h1>
            <Subheader> Start tackling tasks here. </Subheader>
        </Header>
        <MainGrid>
            <Grid>
                {grid}
            </Grid>
            <GridMap>
                <Map tasks={tasks}/>
            </GridMap>
        </MainGrid>
    </Home> 
  )
}
export default Tasks
