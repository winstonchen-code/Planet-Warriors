import React from 'react'
import { HomeContainer } from './HomeElements'
import { Box, Wrap, WrapItem, Heading, Button, Text} from '@chakra-ui/react';
import EarthTasks from '../../images/earth-tasks-kids.png'
import RecycleBadge from '../../images/recycle-badge.png'
import TrashBadge from '../../images/trash-badge.png'
import TreeBadge from '../../images/tree-badge.png'

import './Home.css'; 



const Home = () => {
  return (
    <>
      <HomeContainer>
        <div>
     
          <div className="outer-content">
            <div className="inner-content-left">
              <img src={EarthTasks} width="48%" />
            </div>
           
            <div className="inner-content-right">
              
              <Heading color="#158167" size="xl">Planet Warrior is a fun way to do good and take care of our planet</Heading>
              <Text fontSize="xl" color="#1862A9" mt="50px">Be a <em>Planeteer</em> and start completing environmentally friendly activities today </Text>

              <Text fontSize="xl" color="#1862A9" mt="30px">Earn points and get rewarded with badges</Text>
        
              <br />
              <Button size="md" fontWeight="medium" colorScheme="green" mt="30px">View My Tasks</Button>
            </div>

       
          </div>

    
              <Box width="50%"><img src={RecycleBadge}/></Box>
          
              <Box width="50%"><img src={TreeBadge}/></Box>
            
              <Box width="50%"><img src={TrashBadge}/></Box>
      

          
    
            
        </div>
 

      </HomeContainer>
    </>
  )
}

export default Home
