import React from 'react'
import { HomeContainer } from './HomeElements'
import { Box, Wrap, WrapItem, Heading, Button, Text} from '@chakra-ui/react';
import EarthTasks from '../../images/earth-tasks-kids.png'
import RecycleBadge from '../../images/badges/recycle-badge.png'
import TrashBadge from '../../images/badges/trash-badge.png'
import TreeBadge from '../../images/badges/tree-badge.png'

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
              <Button size="md" fontWeight="medium" colorScheme="green" mt="30px">Sign up</Button>
            </div>
          </div>

    
          <center><br /><br /><br />
            <div className="badge-header">
            <Heading color="#158167" size="lg">Earn your next badge as you accomplish tasks!</Heading>
            <Heading color="#1862A9" size="md">Flip each one to see how you can earn.</Heading>
            </div>

            <div className="badge-row">
              
              <div className="badge-card">
                <div className="badge-card-inner">
                  <div className="flip-badge-front">
                    <img src={RecycleBadge} alt="RecycleBadge" width="70%"/>
                  </div>
                  <div className="flip-badge-back">
                    <p className="badge-text"> <br /><br />
                      You are a recycling warrior! <br />
                      You help reduce the amount of  <br />
                      waste sent to landfills by  <br />
                      collecting plastic, cans, & paper. <br />
                      Get 100 points and earn the <br />
                      Recycling Badge!
                    </p>
                  </div>
                </div>
              </div>

              <div className="badge-card">
                <div className="badge-card-inner">
                  <div className="flip-badge-front">
                    <img src={TreeBadge} alt="TreeBadge"  width="72%"/>
                  </div>
                  <div className="flip-badge-back">
                    <p className="badge-text"> <br /><br />
                      You are a tree planting warrior!<br />
                      By helping plant trees, you <br />
                      help stop climate change and <br />
                      reduce carbon dioxide. <br />
                      Get 100 points and earn the <br />
                      Tree Badge!
                    </p>
                  </div>
                </div>
              </div>

              <div className="badge-card">
                <div className="badge-card-inner">
                  <div className="flip-badge-front">
                    <img src={TrashBadge} alt="TrashCollectorBadge" width="70%"/>
                  </div>
                  <div className="flip-badge-back">
                    <p className="badge-text"> <br /><br />
                      You are a trash collecting warrior! <br />
                      Less litter on the planet  <br />
                      gives us a cleaner environment  <br />
                      for humans and animals! <br />
                      Get 100 points and earn the<br />
                       Trash Collector Badge!
                    </p>
                  </div>
                </div>
              </div>
              
          </div>
         </center>
          

        </div>
        
        {/* <div className="footer">
        </div> */}
 

      </HomeContainer>
    </>
  )
}

export default Home
