import { useToast, VStack, Input, useColorModeValue, Box, Button, Heading, HStack, IconButton, Image, Text, Toast } from '@chakra-ui/react'
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteSweep } from "react-icons/md";
// import { useColorModeValue } from './ui/color-mode';
import { useProductStore } from '../store/product';
// import { toaster } from "../components/ui/toaster"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import UpdateModal from './Modal';
import { useState } from 'react';

const ProductCard = ({ product }) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");
    const toast = useToast();
    const { deleteProduct, updateProduct } = useProductStore();
    const handleDeleteProduct = async () => {
        const { success, message } = await deleteProduct(product._id);
        if (!success) {

        }
        toast({
            description: message,
            title: success ? "Success" : "Error",
            type: success ? "success" : "error",
            duration: 5000,
            isColosable: true,
        })
    }
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const handleUpdateProduct = async (pid, updatedProduct) => {
        const { success, message } = await updateProduct(pid, updatedProduct);
        toast({
            description: message,
            title: success ? "Success" : "Error",
            type: success ? "success" : "error",
            duration: 5000,
            isColosable: true,
        })
    }
    return (<Box
        shadow={"lg"}
        rounded={"lg"}
        overflow={"hidden"}
        transition={"all 0.3s"}
        _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w="full" objectFit={"cover"} />

        <Box p={4}>
            <Heading as={"h3"} size="md" mb={2} >{product.name}</Heading>
            <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                ${product.price}
            </Text>
            <HStack spacing={2}>
                <UpdateModal
                    buttonContent={<CiEdit />}
                    modalContent={{
                        title: "Update Product",
                        content: (<VStack spacing={4}>
                            <Input
                                placeholder='Product name'
                                name='name'
                                value={updatedProduct.name}
                                onChange={(e) => setUpdatedProduct({ ...updateProduct, name: e.target.value })}
                            />
                            <Input
                                placeholder='Price'
                                name='price'
                                type='number'
                                value={updatedProduct.price}
                                onChange={(e) => setUpdatedProduct({ ...updateProduct, price: e.target.value })}
                            />
                            <Input
                                placeholder='Image URL'
                                name='image'
                                value={updatedProduct.image}
                                onChange={(e) => setUpdatedProduct({ ...updateProduct, image: e.target.value })}
                            />
                        </VStack>),
                    }}
                    handleUpdateProduct={() => handleUpdateProduct(product._id, updatedProduct)}

                />
                <Button size="xs" onClick={handleDeleteProduct}><MdOutlineDeleteSweep /></Button>

            </HStack>

        </Box>
    </Box >)
}

export default ProductCard