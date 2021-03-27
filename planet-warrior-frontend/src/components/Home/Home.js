import React from 'react'
import { HomeContainer } from './HomeElements'
import { Box, Heading, Button, Text} from '@chakra-ui/react';
import EarthTasks from '../../images/earth-tasks-kids.png'
import './Home.css'; 



const Home = () => {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <>
      <HomeContainer>
        <div>

          <div className="welcome-bar">
          <Box bg="#229955" w="100%" p={4} color="white" textAlign="center">
            <Heading as="h1" size="lg">Welcome Planeteer!</Heading>
          </Box>
          </div>
          
          <div className="home-header-1">
            <Heading color="#1F844A">Planet Warrior is a fun way to do good for our planet!</Heading>
          </div>
     
          <div className="outer-content">
           
              <img src={EarthTasks} height="60%" width="60%" />

          
            <div className="inner-content-right">
              
              <Heading color="#158167" size="2xl">Planet Warrior is a fun way to do take care of our planet!</Heading>
              <Text fontSize="3xl" color="#1862A9" mt="100px">Be a Planeteer and start doing environmentally friendly activities. </Text>
        
              <br />
              <Button size="lg" colorScheme="green" mt="20px">Sign Up For Free</Button>
              <Button size="lg" colorScheme="green" mt="20px" ml="10px">Sign In</Button>
          </div>
       
          </div>


          
    
            
        </div>
 

      </HomeContainer>
    </>
  )
}

export default Home
