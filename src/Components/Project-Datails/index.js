import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

export default ({
  title,
  image,
  description,
  description2,
  techstack,
  previewLink,
  githubLink,
}) => (
  <Box
    border={{ lg: "2px solid #6366F1" }}
    borderRadius={"lg"}
    maxW="7xl"
    mx="auto"
    px={{ base: "0", lg: "4" }}
    py={{ base: "0", lg: "2" }}
    mt={{ lg: "4",md:"4" }}
  >
    <Stack
      direction={{ base: "column-reverse", lg: "row" }}
      spacing={{ base: "0", lg: "20" }}
    >
      <Box
        width={{ lg: "sm" }}
        // transform={{ base: "translateY(-50%)", lg: "none" }}
        borderRadius={"2xl"}
        bg={{
          base: "gray.700",
          lg: "transparent",
        }}
        my={{ base: "2", md: "2", lg: "0" }}
        px={{ base: "6", md: "8", lg: "0" }}
        py={{ base: "4", md: "4", lg: "12" }}
        // height={{ base: "23rem", md: "28rem", sm: "26rem" }}
        // position="relative"
        // height="fill"
      >
        <Stack spacing={{ base: "8", lg: "10" }}>
          <Stack spacing={{ base: "2", lg: "4" }}>
            <Heading size="md" color="#6366F1" pb="1" mt={{ sm: "4" }} textAlign="center">
              {title}
            </Heading>
            <Heading
              fontSize={{ base: "11px", md: "xs", lg: "sm" }}
              lineHeight={"1.5"}
              color="#CCCCCC"
              fontWeight="normal"
            >
              {description}
            </Heading>
            <Heading
              fontSize={{ base: "11px", md: "xs", lg: "sm" }}
              color="#CCCCCC"
              lineHeight={"1.5"}
              fontWeight="normal"
            >
              {description2}
            </Heading>
            <Heading
              size="xs"
              color="#6366F1"
              pt={{ base: "4", sm: "4", md: "4" }}
            >
              Tech Stacks :
            </Heading>
            <Heading
              fontSize={{ base: "11px", md: "xs", lg: "sm" }}
              color="#CCCCCC"
              fontWeight="bold"
              lineHeight={"1.6"}
            >
              {techstack}
            </Heading>
          </Stack>
          <HStack
            justifyContent={"space-evenly"}
            // position="absolute"
            // bottom={{ base: "3", lg: "-6", sm: "5" }}
            w="100%"
          >
            <Link
              color={"#6366F1"}
              fontWeight="bold"
              fontSize="md"
              href={previewLink}
              target="_blank"
            >
              Live
            </Link>
            <Link
              color={"#6366F1"}
              fontWeight="bold"
              fontSize="md"
              href={githubLink}
              target="_blank"
            >
              Github
            </Link>
          </HStack>
        </Stack>
      </Box>
      <Flex alignItems="center">
        <Image
          src={image}
          alt={title}
          fallback={<Skeleton />}
          maxH="450px"
          minW="300px"
          objectFit="cover"
          flex="1"
          borderRadius={"md"}
        />
      </Flex>
    </Stack>
  </Box>
);
