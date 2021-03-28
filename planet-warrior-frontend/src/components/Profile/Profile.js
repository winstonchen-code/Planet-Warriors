import React, { useState, useEffect } from 'react';
import { Grid, GridItem, Image, Text, Box, Progress, VStack, SimpleGrid } from "@chakra-ui/react";
import TitleIcon from './title-icon.png';

const Profile = ({currentUser}) => {

  return (
    <Grid
      minH="100vh"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(7, 1fr)"
      gap={9}
      p={4}
    >
      <GridItem
        rowSpan={2}
        colSpan={5}
        borderWidth="1px"
        maxW="4xl"
        borderRadius="lg"
        p={5}
        shadow="md"
        textAlign="center"
        overflow="hidden"
      >
        TASKS IN PROGRESS
        <Box p="223"> PENDING TASKS IN HERE</Box>
      </GridItem>

      <GridItem
        align="center"
        rowSpan={2}
        colSpan={2}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        shadow="md"
        p={6}
      >
        <Image
          borderRadius="full"
          boxSize="150px"
          src={TitleIcon}
          alt="User Title"
        />
        <Text fontSize="xl" pt={4}>{currentUser.title}</Text>
      </GridItem>

      <GridItem textAlign="center" rowSpan={1} colSpan={7} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} shadow="md">

        <Text>ACCOMPLISHMENTS</Text>
        <VStack mt={5} align="left" spacing={10}>
          <Box>
            <Text align="left" spacing={10}>Plastic - You've picked up enough plastic to span the state of Texas!</Text>
            <Progress hasStripe mt={4} value={64} colorScheme="green" />
            <Text align="left">36 points to go until your next accomplishment!</Text>
          </Box>
          <Box>
            <Text align="left" spacing={10}>Trash - You've picked up enough trash to span the Pacific Crest Trail!</Text>
            <Progress hasStripe mt={4} value={50} colorScheme="green" />
            <Text align="left">50 points to go until your next accomplishment!</Text>
          </Box>
          <Box>
            <Text align="left" spacing={10}>Trees - You've planted enough trees to cover a small backyard!</Text>
            <Progress hasStripe mt={4} value={15} colorScheme="green" />
            <Text align="left">85 points to go until your next accomplishment!</Text>
          </Box>
        </VStack>
      </GridItem>
      <GridItem textAlign="center" rowSpan={1} colSpan={7} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} shadow="md">
        BADGES
        <SimpleGrid mt={5} minChildWidth="120px" spacing="40px">
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
      </GridItem>
    </Grid>
  )
}

export default Profile
