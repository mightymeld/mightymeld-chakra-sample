import { Link, useLocation } from "react-router-dom";
import { Box, Image, Hide, Heading, Text } from "@chakra-ui/react";
import avatarImage from "../../assets/image-avatar.jpg";
import homeIcon from "../../assets/icons/icon-nav-home.svg";
import movieIcon from "../../assets/icons/icon-nav-movies.svg";
import tvSeriesIcon from "../../assets/icons/icon-nav-tv-series.svg";
import bookmrkIcon from "../../assets/icons/icon-nav-bookmark.svg";

const navLinks = [
  {
    name: "Home",
    icon: homeIcon,
    link: "/",
  },
  {
    name: "Movies",
    icon: movieIcon,
    link: "/movies",
  },
  {
    name: "TV Series",
    icon: tvSeriesIcon,
    link: "/tv-series",
  },
  {
    name: "Bookmarks",
    icon: bookmrkIcon,
    link: "/bookmarks",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Box
      bg={"#161d2f"}
      p={5}
      borderRadius={"lg"}
      display={"flex"}
      flexDirection={{
        base: "row",
        lg: "column",
      }}
      width={{
        base: "100%",
        lg: 200,
      }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flexDirection={{
          base: "row",
          lg: "column",
        }}
        gap={10}
      >
        <Hide below="sm">
          <Heading fontSize={16}>MovieApp</Heading>
        </Hide>

        <Box
          py={{
            base: "0px",
            lg: "16px",
          }}
          display="flex"
          flexDirection={{
            base: "row",
            lg: "column",
          }}
          gap={8}
        >
          {navLinks.map((item) => (
            <Link key={item.name} to={item.link}>
              <Box height={5} display={"flex"} gap={3} alignItems={"center"}>
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={4}
                  style={{
                    filter: `${
                      pathname === item.link
                        ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                        : "invert(84%)"
                    }`,
                  }}
                />
                <Hide below="lg">
                  <Text fontWeight={500}> {item.name}</Text>
                </Hide>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
      <Hide below="sm">
        <Image src={avatarImage} alt="avatar" borderRadius={"full"} width={90} height={90} />
      </Hide>
    </Box>
  );
};

export default Sidebar;
