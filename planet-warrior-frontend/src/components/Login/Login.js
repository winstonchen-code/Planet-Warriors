import React, {useState} from 'react';
import { Center, Box, Input, VStack, Button, Text } from "@chakra-ui/react";


const Login = ({ setCurrentUser }) => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState(null)

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     fetch(“https://planetwarriors.herokuapp.com/api/v1/login”, { 
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             username: username,
    //             password: password
    //         })
    //     })
    //         .then(r => r.json())
    //         .then(data => {
    //             if (data.error_message) {
    //                 setError(data.error_message)
    //             } else {
    //                 const userData = JSON.parse(data.user_data)
    //                 localStorage.setItem("token", data.token)
    //                 setCurrentUser(userData)
    //             }
    //         })
    // }

    return (
        <Center minHeight="60vh" >
            <Box w="35%" borderWidth="1px" bg="white" p="10">
                
                <form onSubmit={null}>
                    <VStack spacing="24px">
                        <Input value={null} onChange={null} type="text" placeholder="Username" />
                        <Input value={null} onChange={null} type="password" placeholder="Password" />
                        {/* {error
                        ? <Text fontSize="sm" color="red">{error}</Text>
                        : null} */}
                        <Button
                            mt={4}
                            backgroundColor="green"
                            align="left"
                            type="submit"
                            color="white"
                        >
                            Log In
                        </Button>
                    </VStack>
                </form>
            </Box>
        </Center>
    )
}

export default Login;