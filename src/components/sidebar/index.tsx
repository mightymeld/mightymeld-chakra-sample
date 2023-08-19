import { Link, useLocation } from "react-router-dom";
import { Image } from "@chakra-ui/react";
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
    <nav className="flex  lg:flex-col items-center justify-between h-full p-3 rounded-lg bg-[#161d2f]">
      <div className="flex gap-9  lg:flex-col items-center justify-center">
        <Image src="/logo.svg" alt="logo" />
        <ul className="flex flex-row lg:flex-col gap-10 lg:py-16">
          {navLinks.map((item) => (
            <li key={item.name} className="">
              <Link to={item.link}>
                <div className=" w-5 h-5">
                  <img
                    src={item.icon}
                    alt=""
                    style={{
                      filter: `${
                        pathname === item.link
                          ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                          : "invert(84%)"
                      }`,
                    }}
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-full border-3 border-white overflow-hidden">
        <img src={avatarImage} alt="avatar" className="rounded-full" />
      </div>
    </nav>
  );
};

export default Sidebar;
