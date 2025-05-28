import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure, Button
} from '@chakra-ui/react';
function UpdateModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button size="xs" onClick={onOpen}>{props.buttonContent}</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.modalContent.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {props.modalContent.content}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}
                            onClick={() => {
                                props.handleUpdateProduct();
                                onClose();
                            }}
                        >
                            Update
                        </Button>
                        <Button variant='ghost' onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default UpdateModal;