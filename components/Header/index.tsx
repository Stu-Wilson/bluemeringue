"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"
                  } `}
              >
                <svg width="220" height="47" viewBox="150 0 205 98">
                  <defs id="SvgjsDefs1046">
                    <linearGradient id="SvgjsLinearGradient1051">
                      <stop id="stop1" stop-color="#ef4136" offset="0"></stop>
                      <stop id="stop2" stop-color="#fbb040" offset="1"></stop>
                      </linearGradient></defs><g id="gmat" transform="matrix(1.206896551724138,0,0,1.206896551724138,11.551724137931036,9.137931034482758)" 
                      fill="url(#SvgjsLinearGradient1051)"><metadata xmlns="http://www.w3.org/2000/svg">
                        </metadata><g xmlns="http://www.w3.org/2000/svg">
                          <path d="M56,9H8c-0.552,0-1,0.448-1,1v44c0,0.553,0.448,1,1,1h48c0.553,0,1-0.447,1-1V10C57,9.448,56.553,9,56,9z M30.707,32.707   l-10,10C20.512,42.902,20.256,43,20,43s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L28.586,32l-9.293-9.293   c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l10,10C31.098,31.684,31.098,32.316,30.707,32.707z M44,43H34   c-0.553,0-1-0.447-1-1s0.447-1,1-1h10c0.553,0,1,0.447,1,1S44.553,43,44,43z"></path></g></g><g id="SvgjsG1048" featurekey="n48U4P-0" transform="matrix(2.245041321773103,0,0,2.245041321773103,97.57531325826271,15.15836518100539)" fill="#ffffff"><path d="M3.92 5.720000000000001 l0.000019531 5.2 l0.04 0 c0.30666 -0.46666 0.74332 -0.84 1.31 -1.12 s1.2167 -0.42 1.95 -0.42 c1.2667 0 2.2966 0.50666 3.09 1.52 s1.19 2.32 1.19 3.92 c0 1.6133 -0.39334 2.9266 -1.18 3.94 s-1.8267 1.52 -3.12 1.52 c-1.68 0 -2.8066 -0.53334 -3.38 -1.6 l-0.04 0 l0 1.32 l-2.7 0 l0 -14.28 l2.84 0 z M3.82 14.84 c0 1 0.21998 1.8 0.65998 2.4 s1.0267 0.9 1.76 0.9 c0.72 0 1.3033 -0.29334 1.75 -0.88 s0.67 -1.3933 0.67 -2.42 c0 -1.0133 -0.21666 -1.82 -0.65 -2.42 s-1.03 -0.9 -1.79 -0.9 c-0.74666 0 -1.3333 0.30666 -1.76 0.92 s-0.64 1.4133 -0.64 2.4 z M16.22 5.720000000000001 l0 14.28 l-2.84 0 l0 -14.28 l2.84 0 z M21.300000000000004 9.66 l0 5.86 c0 0.8 0.12666 1.42 0.38 1.86 s0.73334 0.66 1.44 0.66 c0.78666 0 1.35 -0.23334 1.69 -0.7 s0.51 -1.2133 0.51 -2.24 l0 -5.44 l2.84 0 l0 10.34 l-2.7 0 l0 -1.44 l-0.06 0 c-0.70666 1.1467 -1.7667 1.72 -3.18 1.72 c-1.3467 0 -2.31 -0.34334 -2.89 -1.03 s-0.87 -1.7433 -0.87 -3.17 l0 -6.42 l2.84 0 z M35.1 9.38 c0.97334 0 1.84 0.22664 2.6 0.67998 s1.3567 1.11 1.79 1.97 s0.65 1.85 0.65 2.97 c0 0.10666 -0.0066602 0.28 -0.02 0.52 l-7.46 0 c0.02666 0.82666 0.24332 1.47 0.64998 1.93 s1.03 0.69 1.87 0.69 c0.52 0 0.99666 -0.13 1.43 -0.39 s0.71 -0.57666 0.83 -0.95 l2.5 0 c-0.73334 2.32 -2.3466 3.48 -4.84 3.48 c-0.94666 -0.01334 -1.8233 -0.22 -2.63 -0.62 s-1.45 -1.0233 -1.93 -1.87 s-0.72 -1.83 -0.72 -2.95 c0 -1.0533 0.24334 -2.0134 0.73 -2.88 s1.1333 -1.5133 1.94 -1.94 s1.6767 -0.64 2.61 -0.64 z M37.28 13.719999999999999 c-0.13334 -0.77334 -0.38 -1.3333 -0.74 -1.68 s-0.87334 -0.52 -1.54 -0.52 c-0.69334 0 -1.24 0.19666 -1.64 0.59 s-0.63334 0.93 -0.7 1.61 l4.62 0 z M47.76 9.38 c1.5067 0 2.5134 0.57332 3.02 1.72 c0.78666 -1.1467 1.8333 -1.72 3.14 -1.72 c1.2933 0 2.2434 0.32666 2.85 0.98 s0.91 1.5533 0.91 2.7 l0 6.94 l-2.84 0 l0 -5.98 c0 -0.90666 -0.13666 -1.5333 -0.41 -1.88 s-0.71668 -0.52 -1.33 -0.52 c-1.2667 0 -1.9 0.86666 -1.9 2.6 l0 5.78 l-2.84 0 l0 -6.1 c0 -0.88 -0.14 -1.48 -0.42 -1.8 s-0.71334 -0.48 -1.3 -0.48 c-0.54666 0 -1.0033 0.21666 -1.37 0.65 s-0.55 1.0033 -0.55 1.71 l0 6.02 l-2.84 0 l0 -10.34 l2.68 0 l0 1.4 l0.04 0 c0.78666 -1.12 1.84 -1.68 3.16 -1.68 z M64.7 9.38 c0.97334 0 1.84 0.22664 2.6 0.67998 s1.3567 1.11 1.79 1.97 s0.65 1.85 0.65 2.97 c0 0.10666 -0.0066602 0.28 -0.02 0.52 l-7.46 0 c0.02666 0.82666 0.24332 1.47 0.64998 1.93 s1.03 0.69 1.87 0.69 c0.52 0 0.99666 -0.13 1.43 -0.39 s0.71 -0.57666 0.83 -0.95 l2.5 0 c-0.73334 2.32 -2.3466 3.48 -4.84 3.48 c-0.94666 -0.01334 -1.8233 -0.22 -2.63 -0.62 s-1.45 -1.0233 -1.93 -1.87 s-0.72 -1.83 -0.72 -2.95 c0 -1.0533 0.24334 -2.0134 0.73 -2.88 s1.1333 -1.5133 1.94 -1.94 s1.6767 -0.64 2.61 -0.64 z M66.88 13.719999999999999 c-0.13334 -0.77334 -0.38 -1.3333 -0.74 -1.68 s-0.87334 -0.52 -1.54 -0.52 c-0.69334 0 -1.24 0.19666 -1.64 0.59 s-0.63334 0.93 -0.7 1.61 l4.62 0 z M77.44000000000001 9.38 c0.24 0 0.44668 0.03334 0.62002 0.1 l0 2.64 c-0.30666 -0.06666 -0.64666 -0.1 -1.02 -0.1 c-1.8667 0 -2.8 1.1067 -2.8 3.32 l0 4.66 l-2.84 0 l0 -10.34 l2.7 0 l0 1.92 l0.04 0 c0.28 -0.66666 0.72334 -1.2 1.33 -1.6 s1.2633 -0.6 1.97 -0.6 z M82.10000000000001 5.720000000000001 l0 2.34 l-2.84 0 l0 -2.34 l2.84 0 z M82.10000000000001 9.66 l0 10.34 l-2.84 0 l0 -10.34 l2.84 0 z M90.28 9.38 c1.32 0 2.2766 0.33338 2.87 1 s0.89 1.7267 0.89 3.18 l0 6.44 l-2.84 0 l0 -5.86 c0 -0.85334 -0.13666 -1.4867 -0.41 -1.9 s-0.74334 -0.62 -1.41 -0.62 c-0.77334 0 -1.3333 0.23334 -1.68 0.7 s-0.52 1.2333 -0.52 2.3 l0 5.38 l-2.84 0 l0 -10.34 l2.7 0 l0 1.44 l0.06 0 c0.70666 -1.1467 1.7667 -1.72 3.18 -1.72 z M100.32000000000001 9.38 c1.4267 0 2.4534 0.55332 3.08 1.66 l0.04 0 l0 -1.38 l2.7 0 l0 9.7 c0 1.4933 -0.46334 2.6266 -1.39 3.4 s-2.2434 1.16 -3.95 1.16 c-1.3067 0 -2.3834 -0.31334 -3.23 -0.94 s-1.2967 -1.42 -1.35 -2.38 l2.82 0 c0.22666 0.94666 0.93332 1.42 2.12 1.42 c0.73334 0 1.2967 -0.21666 1.69 -0.65 s0.59 -1.05 0.59 -1.85 l0 -1.42 l-0.04 0 c-0.28 0.50666 -0.69 0.9 -1.23 1.18 s-1.1633 0.42 -1.87 0.42 c-1.3867 0 -2.47 -0.45334 -3.25 -1.36 s-1.17 -2.1866 -1.17 -3.84 c0 -1.4667 0.41 -2.6866 1.23 -3.66 s1.89 -1.46 3.21 -1.46 z M98.72 14.46 c0 0.97334 0.20336 1.7333 0.61002 2.28 s0.97 0.82 1.69 0.82 c0.73334 0 1.32 -0.26334 1.76 -0.79 s0.66 -1.2233 0.66 -2.09 c0 -1.04 -0.21 -1.8267 -0.63 -2.36 s-1.0233 -0.8 -1.81 -0.8 c-0.73334 0 -1.2967 0.27666 -1.69 0.83 s-0.59 1.2567 -0.59 2.11 z M111.26 9.66 l0 5.86 c0 0.8 0.12666 1.42 0.38 1.86 s0.73334 0.66 1.44 0.66 c0.78666 0 1.35 -0.23334 1.69 -0.7 s0.51 -1.2133 0.51 -2.24 l0 -5.44 l2.84 0 l0 10.34 l-2.7 0 l0 -1.44 l-0.06 0 c-0.70666 1.1467 -1.7667 1.72 -3.18 1.72 c-1.3467 0 -2.31 -0.34334 -2.89 -1.03 s-0.87 -1.7433 -0.87 -3.17 l0 -6.42 l2.84 0 z M125.06 9.38 c0.97334 0 1.84 0.22664 2.6 0.67998 s1.3567 1.11 1.79 1.97 s0.65 1.85 0.65 2.97 c0 0.10666 -0.0066602 0.28 -0.02 0.52 l-7.46 0 c0.02666 0.82666 0.24332 1.47 0.64998 1.93 s1.03 0.69 1.87 0.69 c0.52 0 0.99666 -0.13 1.43 -0.39 s0.71 -0.57666 0.83 -0.95 l2.5 0 c-0.73334 2.32 -2.3466 3.48 -4.84 3.48 c-0.94666 -0.01334 -1.8233 -0.22 -2.63 -0.62 s-1.45 -1.0233 -1.93 -1.87 s-0.72 -1.83 -0.72 -2.95 c0 -1.0533 0.24334 -2.0134 0.73 -2.88 s1.1333 -1.5133 1.94 -1.94 s1.6767 -0.64 2.61 -0.64 z M127.24000000000001 13.719999999999999 c-0.13334 -0.77334 -0.38 -1.3333 -0.74 -1.68 s-0.87334 -0.52 -1.54 -0.52 c-0.69334 0 -1.24 0.19666 -1.64 0.59 s-0.63334 0.93 -0.7 1.61 l4.62 0 z">
                            </path></g></svg>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[7px] rotate-45" : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0 " : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                      }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <a
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                            <div
                              className={`submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                                }`}
                            >
                              {menuItem.submenu.map((submenuItem) => (
                                <Link
                                  href={submenuItem.path}
                                  key={submenuItem.id}
                                  className="block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
