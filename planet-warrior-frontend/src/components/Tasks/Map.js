import React, {useState} from 'react';
import { GoogleMap, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';
import Task from './Task'


const containerStyle = {
  width: '720px',
  height: '720px',
  // position: 'absolute',
  
};

const onLoad = marker => {
  // console.log('marker: ', marker)
}

const Map = ({tasks, currentUser, setCurrentUser}) => {

  const [selectedTask,setSelectedTask] = useState(null)

  let center = {lat: 45.513025510894856, lng: -122.61487031046339}

  return (
    <div>
  <LoadScript
        googleMapsApiKey= "AIzaSyCC_3Zb3wMWerp5DeqNQ75oIduhkjJg5es"
      >
        {<GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11} 
        >
          {tasks.map(task =>  (
            <Marker 
            onClick={() => setSelectedTask(task)}
            icon={
              {
              url: task.name === "plant tree" ? 
                "./tree.svg"
                : task.name === "pick up trash" ? 
                "./trash.svg"
                : "./bottle-1.svg",
              scaledSize: new window.google.maps.Size(35,35)
            }}
            onLoad={onLoad}
            position={{lat: task.latitude, lng: task.longitude}}
            >
            </Marker>
          ) )} 

          {selectedTask && (
            <InfoWindow
            position={{lat: selectedTask.latitude, lng: selectedTask.longitude}}
            onCloseClick={() => setSelectedTask(null)}
            >
            <div><Task task={selectedTask} currentUser={currentUser} setCurrentUser={setCurrentUser}/></div>
              </InfoWindow>
          )}

        </GoogleMap>}
  </LoadScript>
    </div>
  );
}

export default Map;
