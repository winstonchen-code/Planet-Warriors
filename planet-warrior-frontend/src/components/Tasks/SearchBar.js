import React from 'react';
import {InputLabel, Select, MenuItem, FormControl} from "@material-ui/core"
import './task.css';

const SearchBar = (props) => {

  const {setFilterDeadline, filterDeadline, filterPoint, setFilterPoint, filterType, setFilterType, tasks} = props
  
  
  return(
    <div className="searchbar">
      <div className="bar">

                  <div className="search-type">
                    <FormControl className="search-type-1">
                      <InputLabel id="demo-simple-select-label" color="primary">Type</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filterType}
                        color="primary"
                        onChange={e => setFilterType(e.target.value)}
                      >
                        <MenuItem value={"All"}>All</MenuItem>
                        <MenuItem value={"trash"}>Pickup Trash</MenuItem>
                        <MenuItem value={"tree"}>Plant tree</MenuItem>
                        <MenuItem value={"plastic"}>Collect plastic</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="search-points">
                    <FormControl className="search-points-1">
                      <InputLabel id="demo-simple-select-label" color="primary">Points</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filterPoint}
                        color="primary"
                        onChange={(e) => setFilterPoint(e.target.value)}
                      >
                        <MenuItem value={"All"}>All</MenuItem>
                        <MenuItem value={10}>10 ~ 15 points</MenuItem>
                        <MenuItem value={15}>15 ~ 20 points</MenuItem>
                        <MenuItem value={20}>20 points</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="search-deadline">
                     <FormControl className="search-deadline-1">
                      <InputLabel id="demo-simple-select-label" color="primary">Deadline</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filterDeadline}
                        color="primary"
                        onChange={(e) => setFilterDeadline(e.target.value)}
                      >
                        <MenuItem value={"All"}>All</MenuItem>
                        <MenuItem value={5}>less than 5 days</MenuItem>
                        <MenuItem value={10}>5 ~ 10 days</MenuItem>
                        <MenuItem value={11}>more than 10 days</MenuItem>

                      </Select>
                    </FormControl>
                  </div>

      </div>

    </div>
  )
}

export default SearchBar;