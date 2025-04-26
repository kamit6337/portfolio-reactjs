import { navLinkList } from "@/constants";
import { ModeToggle } from "../darkToggle/ModeToggle";
import { useEffect, useState } from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import ReactIcons from "@/assets/icons";

const GithubLink = "https://github.com/Kamit6337";

const Navbar = () => {
  const [openLargeNav, setOpenLargeNav] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = openLargeNav ? "hidden" : "auto";

    return () => {
      document.body.style.overflowY = "auto"; // Ensure it resets if component unmounts
    };
  }, [openLargeNav]);

  const handleClick = (href: string) => {
    const selectedDiv = document.querySelector(href) as HTMLElement;
    if (selectedDiv) {
      const offsetTop = selectedDiv.offsetTop;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="w-full ">
        <HoverBorderGradient
          containerClassName={`rounded-full w-full bg-background  border border-slate-700 cursor-default`}
          className="bg-background  text-foreground w-full flex justify-between items-center gap-5 md:gap-10 xl:gap-16 px-5 md:px-10 lg:py-1 cursor-default"
        >
          <button
            className="sm:hidden hover:scale-125 duration-200"
            onClick={() => {
              setOpenLargeNav(true);
            }}
          >
            {ReactIcons.hamburger}
          </button>

          {/* NOTE: FOR LARGER THAN MOBILE */}
          <div className="hidden w-full sm:flex justify-between items-center">
            {navLinkList.map((obj, i) => {
              return (
                <div key={i}>
                  <p
                    className={`navbar_link cursor-pointer hover:border-b hover:border-foreground`}
                    onClick={() => handleClick(`#${obj.href}`)}
                  >
                    {obj.name}
                  </p>
                </div>
              );
            })}
          </div>

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

      {/* NOTE: OPEN LARGE NAVBAR */}
      {openLargeNav ? (
        <div className="absolute z-50 top-0 left-0 w-full h-dvh flex flex-col bg-background">
          <div className="h-20 flex items-center px-10">
            <button
              className="text-2xl"
              onClick={() => {
                setOpenLargeNav(false);
              }}
            >
              {ReactIcons.cancel}
            </button>
          </div>
          <div className="flex-1 flex flex-col gap-10 justify-center items-center">
            {navLinkList.map((obj, i) => {
              return (
                <div key={i}>
                  <p
                    className={`navbar_link h-5 cursor-pointer hover:border-b hover:border-foreground `}
                    onClick={() => {
                      handleClick(`#${obj.href}`);
                      setOpenLargeNav(false);
                    }}
                  >
                    {obj.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
