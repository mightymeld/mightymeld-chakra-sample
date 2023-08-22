import { SetStateAction, useContext, useState } from "react";
import {
  Box,
  Image,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import searchIcon from "../../assets/icons/icon-search.svg";
import Layout from "../../layout";
import { MovieContext } from "../../context/movies-context";
import { MovieDataType } from "../../assets/data";
import MovieList from "../../components/movie-list";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { Movies } = state;

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = Movies.filter((movie) =>
      movie.title.toLowerCase().includes(search),
    );
    setSearchList(newList);
  };

  return (
    <Layout>
        <Box>
          <InputGroup display={"flex"} justifyContent={"center"}>
            <InputLeftElement pointerEvents="none">
              <Image src={searchIcon} alt="search icon" width={5} height={5} />
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
              value={search}
              onChange={handleSearch}
            />
          </InputGroup>
        </Box>
        <Box py={6} px={4}>
          {search === "" ? (
            <Box w="100%">
              <Heading as="h1" size="md" my={6} fontWeight={400} noOfLines={1}>
                Movies
              </Heading>
              <MovieList recommendList={Movies} />
            </Box>
          ) : (
            <Box w="100%">
              <Heading>
                Found {searchList.length} results for "{search}"{" "}
              </Heading>
              <MovieList recommendList={searchList} />
            </Box>
          )}
        </Box>
    </Layout>
  );
};

export default Movies;
