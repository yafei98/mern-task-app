import { Container, Flex, HStack, Button, Text } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
const Navbar = () => {
    return (
        <Container maxW={"1140px"} px={4}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base: "column",
                    sm: "row"
                }}
            >
                <Text
                // fontSize={{ base: "22", sm: "28" }}
                // fontWeight={"bold"}
                // textTransform={"uppercase"}
                // textAlign={"center"}
                // // bgGradient="linear(to-r, cyan.400, blue.500)"
                // bgClip={"text"}
                >
                    <Link to={"/"}>Product Store </Link>
                </Text>

                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                            <CiSquarePlus fontSize={20} />
                        </Button>
                    </Link>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar