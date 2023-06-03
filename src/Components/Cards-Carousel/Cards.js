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
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ChakraCarousel from "./ChakraCarousel";
// import { ShowProjectDetail } from "../Project-Modal";

export function Cards({ data }) {
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
              <Tag size="md" variant="outline" colorScheme="orange" mb="1">
                {post.title}
              </Tag>
              <Image
                src={post.image}
                alt={post.title}
                fallback={<Skeleton />}
                maxH="350px"
                // minW="300px"
                objectFit="contain"
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
            </VStack>

            <Flex justifyContent="space-between" mb="2">
              <HStack spacing={2}>
                <Tag
                  size="sm"
                  variant="outline"
                  colorScheme="green"
                  p="1"
                  lineHeight={"1.5"}
                >
                  {post.techstack}
                </Tag>
              </HStack>
            </Flex>
            <Flex justifyContent="space-between">
              <HStack spacing={2}>
                {post.previewLink && (
                  <Link href={post.previewLink} isExternal>
                    <Tag size="sm" variant="outline" colorScheme="green">
                      View Live
                    </Tag>
                  </Link>
                )}
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
