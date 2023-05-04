import React from "react";
import "fontsource-inter/500.css";
import {
  ChakraProvider,
  extendTheme,
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Tag,
  Image,
  Skeleton,
  useDisclosure,
  ModalOverlay,
  Link,
} from "@chakra-ui/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ChakraCarousel from "./ChakraCarousel";
// import { ShowProjectDetail } from "../Project-Modal";

export function Cards({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // <ChakraProvider theme={extendTheme(theme)}>
    <Container
      py={8}
      px={0}
      maxW={{
        base: "100%",
        sm: "35rem",
        md: "43.75rem",
        lg: "57.5rem",
        xl: "75rem",
        xxl: "87.5rem",
      }}
    >
      <ChakraCarousel gap={32}>
        {data.map((post, index) => (
          <Flex
            key={index}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            justifyContent="space-between"
            flexDirection="column"
            overflow="hidden"
            color="gray.300"
            bg="base.d100"
            rounded={5}
            flex={1}
            p={5}
          >
            <VStack mb={6}>
              {/* <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                textAlign="left"
                w="full"
                mb={2}
              >
                {capsFirst(post.title)}
              </Heading> */}
              <Tag size="md" variant="outline" colorScheme="orange" mb="1">
                {post.title}
              </Tag>
              <Image
                src={post.image}
                alt={post.title}
                fallback={<Skeleton />}
                maxH="450px"
                fallbackStrategy={() => console.log("==============")}
                minW="300px"
                objectFit="cover"
                flex="1"
                borderRadius={"md"}
              />
              <Tag
                size="sm"
                variant="outline"
                colorScheme="white"
                p="1"
                lineHeight={"1.5"}
              >
                {post.description}
              </Tag>
              <Tag
                size="sm"
                variant="outline"
                colorScheme="white"
                p="1"
                lineHeight={"1.5"}
              >
                {post.description2}
              </Tag>
              {/* <Text w="full">{capsFirst(post.description)}</Text> */}
              {/* <Text w="full">{capsFirst(post.description2)}</Text> */}
              {/* <Tag size="sm" variant="outline" colorScheme="green" p='4' lineHeight={'2'}>
                {post.techstack}
              </Tag> */}
            </VStack>

            <Flex justifyContent="space-between" mb="2">
              <HStack spacing={2}>
                <Tag
                  size="sm"
                  variant="outline"
                  colorScheme="green"
                  p="4"
                  lineHeight={"1.5"}
                >
                  {post.techstack}
                </Tag>
              </HStack>
            </Flex>
            <Flex justifyContent="space-between">
              <HStack spacing={2}>
                <Link href={post.previewLink} isExternal>
                  <Tag
                    size="sm"
                    variant="outline"
                    colorScheme="green"
                  >
                    View Live
                  </Tag>
                </Link>
                <Link href={post.githubLink} isExternal>
                  <Tag size="sm" variant="outline" colorScheme="cyan">
                    Source Code
                  </Tag>
                </Link>
              </HStack>
            </Flex>
          </Flex>
        ))}
      </ChakraCarousel>
    </Container>
    // </ChakraProvider>
  );
}

function ShowProjectDetail({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSizeClick = () => {
    onOpen();
  };

  return (
    <>
      <Button
        onClick={handleSizeClick}
        colorScheme="green"
        fontWeight="bold"
        color="gray.900"
        size="sm"
      >
        More
      </Button>

      <Modal
        color="gray.300"
        bg="base.d100"
        rounded={5}
        onClose={onClose}
        size={"xl"}
        isOpen={isOpen}
      >
        <ModalOverlay />
        <ModalContent color="gray.300" bg="#252A2F" rounded={5} w={"500px"}>
          <ModalHeader>{data.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody color="gray.300" bg="#252A2F" rounded={5}>
            <Flex>
              <Image
                src={data.detailImages[0]}
                alt={data.title}
                fallback={<Skeleton />}
                maxH="450px"
                minW="300px"
                objectFit="contain"
                flex="1"
                borderRadius={"md"}
              />
              <Image
                src={data.detailImages[0]}
                alt={data.title}
                fallback={<Skeleton />}
                maxH="450px"
                minW="300px"
                objectFit="contain"
                flex="1"
                borderRadius={"md"}
              />
              <Image
                src={data.detailImages[0]}
                alt={data.title}
                fallback={<Skeleton />}
                maxH="450px"
                minW="300px"
                objectFit="contain"
                flex="1"
                borderRadius={"md"}
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
