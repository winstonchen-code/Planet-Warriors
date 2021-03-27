import React from 'react';
import { Grid, GridItem, Image, Text, HStack } from "@chakra-ui/react";
import TitleIcon from './title-icon.png';

const Profile = () => {
  return (
    <Grid
      minH="100vh"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={4}
      p={4}
    >
      <GridItem rowSpan={1} colSpan={2} borderWidth="1px" borderRadius="lg" p={5} shadow="md">
        <HStack>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
          />
          <Text fontSize="xl" pl={6} pt="120px">User Name</Text>
        </HStack>
      </GridItem>
      <GridItem align="center" rowSpan={2} colSpan={1} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} shadow="md">
      <Image
          borderRadius="full"
          boxSize="150px"
          src={TitleIcon}
          alt="User Title"
        />
        <Text fontSize="xl" pt={4}>Planeteer</Text>
      </GridItem>
      <GridItem rowSpan={2} colSpan={2} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} shadow="md">

      </GridItem>
    </Grid>
  )
}

export default Profile
