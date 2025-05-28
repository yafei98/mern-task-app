import { useToast, Box, Button, Container, Heading, VStack, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { useProductStore } from '../store/product'

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    })
    const toast = useToast();
    const { createProduct } = useProductStore();
    const handleAddProduct = async () => {
        const { success, message } = await createProduct(newProduct)
        console.log("success:", success);
        console.log("message:", message)
        toast({
            description: message,
            title: success ? "Success" : "Error",
            type: success ? "success" : "error",
            duration: 5000,
            isColosable: true,
        })
        setNewProduct({ name: "", price: "", image: "" })
    }
    return <Container maxW={"container.sm"}>
        <VStack spacing={8}>
            <Heading as="h1" size={"2xl"} textAlign={"center"} mb={8}>
                Create new Product
            </Heading>

            <Box
                w={"full"} p={6} rounded={"lg"} shadow={"md"}
            >
                <VStack spacing={4}>
                    <Input
                        placeholder='Product name'
                        name='name'
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    />
                    <Input
                        placeholder='Price'
                        name='price'
                        type='number'
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    />
                    <Input
                        placeholder='Image URL'
                        name='image'
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                    />
                    <Button colorScheme={'blue'} onClick={handleAddProduct} w="full">Add Product</Button>
                </VStack>

            </Box>
        </VStack>
    </Container>

}

export default CreatePage