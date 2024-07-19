import { Modal, 
    ModalFooter, 
    FormControl, 
    Input, Radio, 
    ModalOverlay, 
    ModalBody, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    Button, RadioGroup, 
    FormLabel } from "@chakra-ui/react"
import { useContext } from "react"
import { GlobalContext } from "../../context"

export default function TransactionFrom({ onClose, isOpen }) {
    const {formData, setFormData,value,setValue,handleFormSubmit } = useContext(GlobalContext)

    function handleFormChange(event){
        setFormData({
            ...formData,[event.target.name] :event.target.value
        })
    }
    function handleSubmit(event){
        event.preventDefault()
        handleFormSubmit(formData)
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
              <form onSubmit={handleSubmit}>
              <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Add New Transaction</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Enter Description</FormLabel>
                            <Input onChange={handleFormChange} 
                            name="description"
                            type="text" 
                            placeholder="Enter Transaction Description" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Enter Amount</FormLabel>
                            <Input onChange={handleFormChange} 
                            name="amount"
                            type="number" 
                            placeholder="Enter Transaction Amount" />
                        </FormControl>

                        <RadioGroup className="mt-5" value={formData.type} onChange={setValue}>

                            <Radio checked={formData.type === 'income'}
                             colorScheme="blue" 
                             value="income" 
                             onChange={handleFormChange}
                             name="type">
                             Income</Radio>

                            <Radio onChange={handleFormChange}
                             checked={formData.type === 'expense'}
                              colorScheme="red" value="expense" 
                              name="type">Expenses</Radio>
                        </RadioGroup>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' className="mr-2"
                        onClick={onClose}
                         >
                            Cancel
                        </Button>
                        <Button  type="submit" onClick={onClose} colorScheme="blue">Add</Button>
                    </ModalFooter>
                </ModalContent>
              </form>
        </Modal>
    )
}