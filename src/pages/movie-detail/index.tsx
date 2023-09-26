import Layout from "../../layout";
import { Box, HStack, Image, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { MovieContext } from "../../context/movies-context";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const { dispatch } = useContext(MovieContext);
  const { state } = useContext(MovieContext);
  const { Movies } = state;

  const Movie = Movies.filter((item) => item.id === id);

  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOOGLE BOOKMARK", id });
  };

  return (
    <Layout>
      <Box w="100%" display="flex" flexDirection="column" gap={8}>
        <Heading fontSize={26}>Movie Detail</Heading>
        <HStack
          spacing={10}
          alignItems="flex-start"
          flexDirection={{
            base: "column",
            lg: "row",
          }}
          height={{
            lg: "60vh",
          }}
        >
          <Box
            height="100%"
            w={{
              base: "100%",
              lg: "50%",
            }}
          >
            <Image src="https://picsum.photos/300/200" alt="Sample Image" width="100%" height="100%" objectFit="cover" />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
            width={{
              base: "100%",
              lg: "50%",
            }}
            gap={8}
          >
            <VStack spacing={10} alignItems="flex-start">
              <Heading>{Movie[0].title} </Heading>
              <HStack spacing={12}>
                <VStack alignItems="flex-start">
                  <Text fontWeight={600} fontSize="18px">
                    Language
                  </Text>
                  <Text>English</Text>
                </VStack>
                <VStack alignItems="flex-start">
                  <Text fontWeight={600} fontSize="18px">
                    Category
                  </Text>
                  <Text>{Movie[0].category} </Text>
                </VStack>
                <VStack alignItems="flex-start">
                  <Text fontWeight={600} fontSize="18px">
                    Rating
                  </Text>
                  <Text>{Movie[0].rating}</Text>
                </VStack>
              </HStack>
              <VStack alignItems="flex-start">
                <Heading fontSize="18px" fontWeight={600}>
                  Synopsis
                </Heading>
                <Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. A numquam expedita consequuntur, minus suscipit nemo molestias
                  similique quae? Vero eveniet modi quia laudantium amet perspiciatis exercitationem porro, dolore velit atque?
                </Text>
              </VStack>
            </VStack>
            <Button
              onClick={() => handleToggleBookmark(Movie[0].id)}
              variant="primary"
              width="100%"
              paddingY={6}
              background={` ${Movie[0].isBookmarked ? "#7e787e" : "#4334e3"}`}
            >
              {Movie[0].isBookmarked ? "Remove from bookmark" : "Add to bookmark"}
            </Button>
          </Box>
        </HStack>
      </Box>
    </Layout>
  );
};

export default MovieDetail;
