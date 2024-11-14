import { navLinkList } from "@/constants";
import { ModeToggle } from "../darkToggle/ModeToggle";
import { useEffect, useState } from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import ReactIcons from "@/assets/icons";

const GithubLink = "https://github.com/Kamit6337";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setToggleNav(true);
      } else {
        setToggleNav(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, options);

    navLinkList.forEach((link) => {
      const section = document.getElementById(link.href);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navLinkList.forEach((link) => {
        const section = document.getElementById(link.href);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const handleClick = (href: string) => (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const selectedDiv = document.querySelector(href) as HTMLElement;
    const offsetTop = selectedDiv.offsetTop;

    window.scrollTo({
      top: offsetTop, // Adjust this value as needed
      behavior: "smooth",
    });
  };

  if (!toggleNav) {
    return (
      <div
        className={`w-full flex justify-between items-center transition-all duration-700`}
      >
        {navLinkList.map((obj, i) => {
          const isActive = activeLink === obj.href;
          return (
            <div key={i}>
              <p
                className={`navbar_link cursor-pointer hover:border-b hover:border-foreground
                  ${isActive ? "border-b border-foreground" : ""}
                  `}
                onClick={handleClick(`#${obj.href}`)}
              >
                {obj.name}
              </p>
            </div>
          );
        })}

        <div className="flex items-center gap-5 h-full">
          <a href={GithubLink} target="_blank" rel="noreferrer">
            <p className="text-xl h-full rounded p-2  border border-slate-200 dark:border-none hover:bg-gray-100 dark:hover:bg-background dark:hover:brightness-75">
              {ReactIcons.github}
            </p>
          </a>
          <ModeToggle />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <HoverBorderGradient
        containerClassName="rounded-full w-full bg-background  border border-slate-500"
        className="bg-background  text-foreground w-full flex justify-between items-center px-5 md:px-10 lg:py-1"
      >
        {navLinkList.map((obj, i) => {
          const isActive = activeLink === obj.href;

          return (
            <div key={i}>
              <p
                className={`navbar_link cursor-pointer hover:border-b hover:border-foreground
                ${isActive ? "border-b border-foreground" : ""}
                `}
                onClick={handleClick(`#${obj.href}`)}
              >
                {obj.name}
              </p>
            </div>
          );
        })}

        <div className="flex items-center gap-5 h-full">
          <a href={GithubLink} target="_blank" rel="noreferrer">
            <p className="text-xl h-full rounded p-2  border border-slate-200 dark:border-none hover:bg-gray-100 dark:hover:bg-background dark:hover:brightness-75">
              {ReactIcons.github}
            </p>
          </a>
          <ModeToggle />
        </div>
      </HoverBorderGradient>
    </div>
  );
};

export default Navbar;
