import { Link, useLocation } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
import avatarImage from "../../assets/image-avatar.png";
import homeIcon from "../../assets/icons/icon-nav-home.svg";
import movieIcon from "../../assets/icons/icon-nav-movies.svg";
import tvSeriesIcon from "../../assets/icons/icon-nav-tv-series.svg";
import bookmrkIcon from "../../assets/icons/icon-nav-bookmark.svg";

const navLinks = [
  {
    name: "home",
    icon: homeIcon,
    link: "/",
  },
  {
    name: "movies",
    icon: movieIcon,
    link: "/movies",
  },
  {
    name: "tv-series",
    icon: tvSeriesIcon,
    link: "/tv-series",
  },
  {
    name: "bookmarks",
    icon: bookmrkIcon,
    link: "/bookmarks",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Box
      bg={"#161d2f"}
      p={3}
      borderRadius={"lg"}
      height="100%"
      display={"flex"}
      flexDirection={{
        base: "row",
        lg: "column",
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
        justifyContent="center"
        alignItems="center"
      >
        <Image src="/logo.svg" alt="logo" />
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
          gap={10}
        >
          {navLinks.map((item) => (
            <Link key={item.name} to={item.link}>
              <Box width={5} height={5}>
                <Image
                  src={item.icon}
                  alt={item.name}
                  style={{
                    filter: `${
                      pathname === item.link
                        ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                        : "invert(84%)"
                    }`,
                  }}
                />
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
      <Image src={avatarImage} alt="avatar" borderRadius={"full"} />
    </Box>
  );
};

export default Sidebar;
