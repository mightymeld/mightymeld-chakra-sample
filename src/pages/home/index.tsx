
/* eslint-disable @typescript-eslint/no-unused-vars */import React, { useContext, useState } from "react";
import {
  Card,
  CardBody,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Image,
  Box,
  Flex,
  SimpleGrid,
  useBreakpointValue
} from "@chakra-ui/react";
import searchIcon from "../../assets/icons/icon-search.svg";
import tvSeriesIcon from "../../assets/icons/icon-category-tv.svg"
import moviesIcon from "../../assets/icons/icon-category-movie.svg"
import Layout from "../../layout";
import BookmarkIcon from "../../components/icons/bookmark-icon";
import BookmarkEmptyIcon from "../../components/icons/bookmark-empy-icon";
import { MovieContext } from "../../context/movies-context";
// import MovieCard from "../../components/movie-card";
// import MovieList from "../../components/movie-list";

const Home = () => {
  const [search, setSearch] = useState('')
  const selectedImageSize = useBreakpointValue({ base: 'small', md: 'medium', lg: 'large' });
  const { state, dispatch } = useContext(MovieContext);
  const { Movies } = state
  const trendingList = Movies.filter(item => item.isTrending === true)
  const recommendList = Movies.filter(item => item.isTrending !== true)


  const handleAddBookmark = (id: string) => {
    dispatch({ type: 'ADD BOOKMARK', id });
  };

  const handleRemoveBookmark = (id: string) => {
    dispatch({ type: 'REMOVE BOOKMARK', id });
  };

  return (
    <Layout>
      <div className="">
        <header className="w-full">
          <InputGroup className="flex items-center">
            <InputLeftElement pointerEvents="none">
              <img src={searchIcon} alt="search icon" className="w-5 h-5" />
            </InputLeftElement>
            <Input
              type="search"
              placeholder="Search for movies or TV series"
              size="md"
              _placeholder={{ opacity: 0.5 }}
              border={"none"}
              outline={"none"}
              focusBorderColor="none"
              htmlSize={6}
            />
          </InputGroup>
        </header>
        <main className="py-6 px-4">
          <Heading as="h1" size="md" my={6} fontWeight={400} noOfLines={1}>
            Trending
          </Heading>

          <Flex gap={4} overflowX={'scroll'} >
            {
              trendingList.map(movie => (
                <Card key={movie.id} padding={0} bg="transparent" color={'white'}  >
                  <CardBody padding={0} position="relative" >
                    <Image
                      src={movie.thumbnail.regular.large} alt='Green double couch with wooden legs'
                      borderRadius='lg' style={{ width: '500px' }}
                    />
                    <Box
                      position="absolute" top={0} left={0} right={0} bottom={0} bg="blackAlpha.900" opacity={0.6} borderRadius="lg"
                    />
                    <Stack mt='6' spacing={0} position="absolute" bottom={0} left={0} right={0} p={4} >
                      <Flex gap={1} alignItems="center" padding={0}>
                        <Text fontSize={10} color="gray.300" aria-label="year of movie">{movie.year}</Text>
                        <Box w="1" h="1" bg="gray.300" rounded="full" mx={1} />
                        <Image src={movie.category === 'Movies'? moviesIcon : tvSeriesIcon} alt="" w="3" />
                        <Text fontSize={10 } color="gray.300" aria-label="movie category">{movie.category}</Text>
                        <Box w="1" h="1" bg="gray.300" rounded="full" mx={1} />
                        <Text fontSize={10} color="gray.300" aria-label="movie rating">{movie.rating}</Text>
                      </Flex>
                      <Text aria-label="movie rating" padding={0} >{movie.title}</Text>
                    </Stack>
                    <Flex justifyContent="flex-end" position="absolute" top={0} left={0} right={0} p={4} >
                      <Box w="10" h="10" bg="black" rounded="full" display="flex" alignItems="center" justifyContent="center"
                        _hover={{ opacity: .9 }}>
                        {
                          movie.isBookmarked ? (
                            <button onClick={() => handleRemoveBookmark(movie.id)} className="">
                              <BookmarkIcon fill={'white'} />
                            </button>
                          ) : (
                            <button onClick={() => handleAddBookmark(movie.id)} className="">
                              <BookmarkEmptyIcon />
                            </button>
                          )
                        }
                      </Box>
                    </Flex>
                  </CardBody>
                </Card>
              ))
            }
          </Flex>

          <Heading as="h1" size="md" my={6} fontWeight={400} noOfLines={1}>
            Recommended For You
          </Heading>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(250px, 1fr))' >
            {
              recommendList.map(movie => (
                <Card key={movie.id} padding={0} bg="transparent" color={'white'} my={3} >
                  <CardBody padding={0} position="relative">
                    <Image
                      src={movie.thumbnail.regular.large}
                      alt='Green double couch with wooden legs'
                      borderRadius='lg' style={{ width: '500px' }}
                    />
                    <Stack mt='6' spacing={0} >
                      <Flex gap={1} alignItems="center" padding={0}>
                        <Text fontSize={10} color="gray.300"  aria-label="year of movie">{movie.year}</Text>
                        <Box w="1" h="1" bg="gray.300" rounded="full" mx={1} />
                        <Image src={movie.category === 'Movies'? moviesIcon : tvSeriesIcon} alt="" w="3" />
                        <Text fontSize={10} color="gray.300"  aria-label="movie category">{movie.category}</Text>
                        <Box w="1" h="1" bg="gray.300" rounded="full" mx={1} />
                        <Text fontSize={10} color="gray.300"  aria-label="movie rating">{movie.rating}</Text>
                      </Flex>
                      <Text aria-label="movie rating" padding={0} >{movie.title}</Text>
                    </Stack>
                    <Flex justifyContent="flex-end" position="absolute" top={0} left={0} right={0} p={4} >
                      <Box w="10" h="10" bg="black" rounded="full" display="flex" alignItems="center" justifyContent="center"
                        _hover={{ opacity: .9 }}>
                        {
                          movie.isBookmarked ? (
                            <button onClick={() => handleRemoveBookmark(movie.id)} className="">
                              <BookmarkIcon fill={'white'} />
                            </button>
                          ) : (
                            <button onClick={() => handleAddBookmark(movie.id)} className="">
                              <BookmarkEmptyIcon />
                            </button>
                          )
                        }
                      </Box>
                    </Flex>
                  </CardBody>
                </Card>
              ))
            }
          </SimpleGrid>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
