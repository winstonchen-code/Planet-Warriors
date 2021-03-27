import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Home, Header, Subheader, Grid, MainGrid} from './TasksElements'
import Task from './Task'

const Tasks = () => {
    const [tasks, setTasks] = useState([])

    useEffect (()=> {
        axios.get('http://localhost:3000/tasks')
        .then( resp => setTasks(resp.data))
        .catch( resp => console.log (resp) )
    }, [tasks.length])

    const grid = tasks.map( item => {
        return (<Task key={item.id} item={item} > </Task>)
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
        </MainGrid>
    </Home> 
  )
}
export default Tasks
