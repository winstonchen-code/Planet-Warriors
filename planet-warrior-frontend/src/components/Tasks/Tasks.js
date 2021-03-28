import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Home, Header, Subheader, Grid, MainGrid, GridMap} from './TasksElements'
import Task from './Task'
import SearchBar from './SearchBar'
import Map from './Map'
import Pagination from '@material-ui/lab/Pagination';

const Tasks = ({currentUser, setCurrentUser, captain}) => {
    const [tasks, setTasks] = useState([])
    const [page, setPage] = useState(1)
    const [filterType, setFilterType] = useState("")
    const [filterPoint, setFilterPoint] = useState("")
    const [filterDeadline, setFilterDeadline] = useState("")


    useEffect (()=> {
        axios.get('https://planetwarriors.herokuapp.com/tasks')
        .then( resp => setTasks(resp.data))
        .catch( resp => console.log (resp) )
    }, [tasks.length])

    const filterTasks = () => {
        let filterTasks = tasks
        if (filterType && filterType !== "All") {
            filterTasks = filterTasks.filter(t => t.name.includes(filterType))
        }

        if (filterPoint && filterPoint !== "All") {
            filterTasks = filterTasks.filter(t => t.point >= filterPoint && t.point < filterPoint + 5)
        }

        if (filterDeadline && filterDeadline !== "All" && filterDeadline !== 11) {
            filterTasks = filterTasks.filter(t => (new Date(t.deadline) - new Date()) / (1000*60*60*24) < filterDeadline && 
                                                  (new Date(t.deadline) - new Date()) / (1000*60*60*24) >= filterDeadline - 5 )
        } else if (filterDeadline === 11) {
            filterTasks = filterTasks.filter(t => (new Date(t.deadline) - new Date()) / (1000*60*60*24) >= filterDeadline)
        }

        return filterTasks
    } 

    const grid = filterTasks().slice((page - 1)*6, page*6).map( task => {
        return (<Task key={task.id} task={task} captain={captain} currentUser={currentUser} setCurrentUser={setCurrentUser}> </Task>)
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
        <SearchBar filterType={filterType} setFilterType={setFilterType} filterPoint={filterPoint}
        setFilterPoint={setFilterPoint} filterDeadline={filterDeadline} setFilterDeadline={setFilterDeadline}
        />
        <MainGrid>
            <Grid>
                {grid}
              <Pagination onChange={handleChange} count={Math.ceil(filterTasks().length/6)} color="primary" />
            </Grid>
            <GridMap>
                <Map currentUser={currentUser} setCurrentUser={setCurrentUser}tasks={filterTasks().slice((page - 1)*6, page*6)}/>
            </GridMap>
        </MainGrid>
    </Home> 
  )
}
export default Tasks