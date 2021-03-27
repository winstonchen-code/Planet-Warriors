import React from 'react'
import { HomeContainer } from './HomeElements'
import { Grid, GridItem, Box, Heading } from '@chakra-ui/react';


const Home = () => {
  // console.log(process.env.REACT_APP_GOOGLE_API_KEY)
  return (
    <>
      <HomeContainer>
        <div>

        <div className="welcome-bar">
          <Box bg="green.500" w="100%" p={3} color="white" textAlign="center">
            <Heading as="h3" size="lg">Welcome User! Let's do some good for the planet!</Heading>
          </Box>
        </div>
          
        <br />
        <div className="home-grid">
          <Grid
            h="1000px"
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(7, 1fr)"
            gap={9}
          >
            <GridItem colSpan={5} rowSpan={2}>
                
                <Box maxW="4xl" borderWidth="1px" borderRadius="lg" overflow="hidden" p="5" textAlign="center">
                TASKS IN PROGRESS
                  <Box p="223"> PENDING TASKS IN HERE</Box>
                </Box>

            </GridItem>
              

        
            <GridItem colSpan={2} rowSpan={1}>
              
              <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="5" textAlign="center">
                My Badge/Status
                  <Box p="20"> BADGE HERE</Box>
                </Box>
                
            </GridItem>
               

            <GridItem colSpan={2} rowSpan={1} >
              <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="5" textAlign="center">
                PROGRESS
                  <Box p="20"> BADGE HERE</Box>
                </Box>
            </GridItem>
              
            <GridItem colSpan={7} rowSpan={3} >
                
              <Box maxW="6xl" borderWidth="1px" borderRadius="lg" overflow="hidden" p="5" textAlign="center">
                FEATURED TASKS 
                  <Box p="100"> PENDING TASKS IN HERE</Box>
                </Box>
            </GridItem>
              

          </Grid>
            
        </div>
        </div>

      </HomeContainer>
    </>
  )
}

export default Home
