import { useContext } from "react";
import { MovieDataType } from "../../assets/data";
import { Card, CardBody, Stack, Text, Image, Box, Flex } from "@chakra-ui/react";
import { MovieContext } from "../../context/movies-context";
import BookmarkIcon from "../icons/bookmark-icon";
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon";
import tvSeriesIcon from "../../assets/icons/icon-category-tv.svg";
import moviesIcon from "../../assets/icons/icon-category-movie.svg";

interface MoviecardProps {
  movie: MovieDataType;
}

const MovieTrendCard = ({ movie }: MoviecardProps) => {
  const { dispatch } = useContext(MovieContext);

  const handleAddBookmark = (id: string) => {
    dispatch({ type: "ADD BOOKMARK", id });
  };

  const handleRemoveBookmark = (id: string) => {
    dispatch({ type: "REMOVE BOOKMARK", id });
  };

  return (
    <Card key={movie.id} padding={0} bg="transparent">
      <CardBody padding={0} position="relative">
        <Image
          src={movie.thumbnail.regular.large}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          style={{ width: "500px" }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.900"
          opacity={0.6}
          borderRadius="lg"
        />
        <Stack mt="6" spacing={0} position="absolute" bottom={0} left={0} right={0} p={4}>
          <Flex gap={1} alignItems="center" padding={0}>
            <Text fontSize={10} color="gray.300" aria-label="year of movie">
              {movie.year}
            </Text>
            <Box w="1" h="1" bg="gray.300" rounded="full" mx={1} />
            <Image src={movie.category === "Movies" ? moviesIcon : tvSeriesIcon} alt="" w="3" />
            <Text fontSize={10} color="gray.300" aria-label="movie category">
              {movie.category}
            </Text>
            <Box w="1" h="1" bg="gray.300" rounded="full" mx={1} />
            <Text fontSize={10} color="gray.300" aria-label="movie rating">
              {movie.rating}
            </Text>
          </Flex>
          <Text aria-label="movie rating" color="gray.300" padding={0}>
            {movie.title}
          </Text>
        </Stack>
        <Flex justifyContent="flex-end" position="absolute" top={0} left={0} right={0} p={4}>
          <Box
            w="10"
            h="10"
            bg="black"
            rounded="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{ opacity: 0.8 }}
          >
            {movie.isBookmarked ? (
              <button onClick={() => handleRemoveBookmark(movie.id)}>
                <BookmarkIcon fill={"white"} />
              </button>
            ) : (
              <button onClick={() => handleAddBookmark(movie.id)}>
                <BookmarkEmptyIcon />
              </button>
            )}
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MovieTrendCard;
