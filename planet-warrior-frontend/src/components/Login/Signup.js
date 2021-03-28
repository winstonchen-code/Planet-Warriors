import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { Center, Box, Input, VStack, Button, Text } from "@chakra-ui/react";


const Signup = ({ setCurrentUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(null);

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("https://planetwarriors.herokuapp.com/api/v1/users", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
            })
        })
            .then(r => r.json())
            .then(data => {
                if (data.message) {
                    setError(data.message)
                } else {
                    localStorage.setItem("token", data.token)
                    setCurrentUser(data.user)
                    history.push('./profile')
                }
            })
    }

    return (
        <Center minHeight="60vh" >
            <Box w="35%" borderWidth="1px" bg="white" p="10">
                
                <form onSubmit={null}>
                    <VStack spacing="24px">
                        <Input value={null} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Username" />
                        <Input value={null} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
                        <Input value={null} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Name" />
                        {error
                        ? error.map(e => <Text fontSize="sm" color="red">{e}</Text>)
                        : null}
                        <Button
                            mt={4}
                            backgroundColor="green"
                            align="left"
                            type="submit"
                            color="white"
                            onClick={handleSubmit}
                        >
                            Sign up
                        </Button>
                    </VStack>
                </form>
            </Box>
        </Center>
    )
}

export default Signup;