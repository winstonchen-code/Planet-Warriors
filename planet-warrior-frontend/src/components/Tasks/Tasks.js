import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Home, Header, Subheader, Grid, MainGrid, GridMap} from './TasksElements'
import Task from './Task'
import Map from './Map'
import Pagination from '@material-ui/lab/Pagination';

const Tasks = ({currentUser, setCurrentUser, captain}) => {
    const [tasks, setTasks] = useState([])
    const [page, setPage] = useState(1)


    useEffect (()=> {
        axios.get('https://planetwarriors.herokuapp.com/tasks')
        .then( resp => setTasks(resp.data))
        .catch( resp => console.log (resp) )
    }, [tasks.length])

    const filterTasks = () => {
        let filterTasks = tasks
        return filterTasks
    } 

    const grid = filterTasks().slice((page - 1)*6, page*6).map( task => {
        return (<Task key={task.id} task={task} captain={captain} currentUser={currentUser} setCurrentUser={setCurrentUser}> </Task>)
    })

    const handleChange = (event, value) => {
     setPage(value);
  };


  console.log(currentUser)

  return (
    <Home>
        <Header>
            <h1>Hello Warriors</h1>
            <Subheader> Start tackling tasks here. </Subheader>
        </Header>
        <MainGrid>
            <Grid>
                {grid}
              <Pagination onChange={handleChange} count={Math.ceil(tasks.length/6)} color="primary" />
            </Grid>
            <GridMap>
                <Map currentUser={currentUser} setCurrentUser={setCurrentUser}tasks={filterTasks().slice((page - 1)*6, page*6)}/>
            </GridMap>
        </MainGrid>
    </Home> 
  )
}
export default Tasks