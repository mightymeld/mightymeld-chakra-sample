import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from "../movie-card";
import { MovieDataType } from "../../assets/data";

interface MovieListProps {
  recommendList: MovieDataType[];
}

const MovieList = ({ recommendList }: MovieListProps) => {
  return (
    <>
      <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(250px, 1fr))">
        {recommendList.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieList;
