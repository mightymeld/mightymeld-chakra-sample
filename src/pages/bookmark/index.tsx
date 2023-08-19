import { SetStateAction, useContext, useState } from "react";
import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import searchIcon from "../../assets/icons/icon-search.svg";
import Layout from "../../layout";
import { MovieContext } from "../../context/movies-context";
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data";

const Bookmarks = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { Movies } = state;
  const bookmarks = Movies.filter((item) => item.isBookmarked);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = Movies.filter((movie) =>
      movie.title.toLowerCase().includes(search),
    );
    setSearchList(newList);
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
              value={search}
              onChange={handleSearch}
            />
          </InputGroup>
        </header>
        <main className="py-6 px-4">
          {search === "" ? (
            <Box w="100%">
              <Heading as="h1" size="md" my={6} fontWeight={400} noOfLines={1}>
                Bookmarks
              </Heading>
              <MovieList recommendList={bookmarks} />
            </Box>
          ) : (
            <Box w="100%">
              <Heading>
                Found {searchList.length} results for "{search}"{" "}
              </Heading>
              <MovieList recommendList={searchList} />
            </Box>
          )}
        </main>
      </div>
    </Layout>
  );
};

export default Bookmarks;
