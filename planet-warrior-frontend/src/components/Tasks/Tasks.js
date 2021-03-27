import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Home, Header, Subheader, Grid, MainGrid, GridMap} from './TasksElements'
import Task from './Task'
import Map from './Map'
import Pagination from '@material-ui/lab/Pagination';

const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const [page, setPage] = useState(1)


    useEffect (()=> {
        axios.get('https://planetwarriors.herokuapp.com/tasks')
        .then( resp => setTasks(resp.data))
        .catch( resp => console.log (resp) )
    }, [tasks.length])

    const filterTasks = tasks.slice(0,6)

    const grid = filterTasks.map( task => {
        return (<Task key={task.id} task={task} > </Task>)
    })

    const handleChange = (event, value) => {
     setPage(value);
  };


  return (
    <Home>
        <Header>
            <h1>Hello Warriors</h1>
            <Subheader> Start tackling tasks here. </Subheader>
        </Header>
        <MainGrid>
            <Grid>
                {grid}
              <Pagination onChange={handleChange} count={Math.ceil(tasks.length/9)} color="primary" />
            </Grid>
            <GridMap>
                <Map tasks={tasks}/>
            </GridMap>
        </MainGrid>
    </Home> 
  )
}
export default Tasks
