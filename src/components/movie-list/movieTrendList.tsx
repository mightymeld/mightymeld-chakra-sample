import { Flex } from "@chakra-ui/react";
import MovieTrendCard from "../movie-card/movieTrend";
import { MovieDataType } from "../../assets/data";

interface MovieTrendListProps {
  trendingList: MovieDataType[];
}

const MovieTrendList = ({ trendingList }: MovieTrendListProps) => {
  return (
    <>
      <Flex gap={4} overflowX={"scroll"}>
        {trendingList.map((movie) => (
          <MovieTrendCard key={movie.id} movie={movie} />
        ))}
      </Flex>
    </>
  );
};

export default MovieTrendList;
