import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Button } from "react-scroll";

// export function ShowProjectDetail({ isOpen, onOpen, onClose }) {
//   // const { isOpen, onOpen, onClose } = useDisclosure();
//   // const [size, setSize] = React.useState("md");

//   // const handleSizeClick = () => {
//   //   // setSize(newSize);
//   //   onOpen();
//   // };

//   // const sizes = ["xs", "sm", "md", "lg", "xl", "full"];

//   return (
//     <>
//       <Button 
//         onClick={() => {
//           // handleSizeClick();
//         }}
//         // key={size}
//         m={4}
//       >{`Open  Modal`}</Button>

//       <Modal onClose={onClose} size={"xl"} isOpen={isOpen} >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>
//           <ModalFooter>
//             <Button onClick={onClose}>Close</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }
