import React from 'react'
import { MovieDataType } from '../../assets/data'
import {
    Card,
    CardBody,
    Stack,
    Text,
    Image,
    Box,
    Flex,
    useBreakpointValue
  } from "@chakra-ui/react";
  import bookmarkIcon from "../../assets/icons/icon-bookmark-full.svg";
  import BookmarkIcon from "../icons/bookmark-icon";
  import BookmarkEmptyIcon from "../icons/bookmark-empy-icon"

interface MoviecardProps {
    movie: MovieDataType
}

const MovieCard = ({movie}: MoviecardProps) => {
    const selectedImageSize = useBreakpointValue({ base: 'small', md: 'medium', lg: 'large' });

    return (
        <Card key={movie.id} padding={0} bg="transparent" color={'white'} my={3} >
            <CardBody padding={0} position="relative">
                <Image
                    src={movie.thumbnail.regular[selectedImageSize]}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg' style={{ width: '500px' }}
                />
                <Stack mt='6' spacing={0} >
                    <Flex gap={1} alignItems="center" padding={0}>
                        <Text aria-label="year of movie">{movie.year}</Text>
                        <Box w="1" h="1" bg="black" rounded="full" mx={1} />
                        <Image src={bookmarkIcon} alt="" w="3" />
                        <Text aria-label="movie category">{movie.category}</Text>
                        <Box w="1" h="1" bg="black" rounded="full" mx={1} />
                        <Text aria-label="movie rating">{movie.rating}</Text>
                    </Flex>
                    <Text aria-label="movie rating" padding={0} >{movie.title}</Text>
                </Stack>
                <Flex justifyContent="flex-end" position="absolute" top={0} left={0} right={0} p={4} >
                    <Box w="10" h="10" bg="black" rounded="full" display="flex" alignItems="center" justifyContent="center"
                        _hover={{ opacity: .1 }}>
                        {
                            movie.isBookmarked ? <BookmarkIcon fill={'white'} /> : <BookmarkEmptyIcon />
                        }
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default MovieCard