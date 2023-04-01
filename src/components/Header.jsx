import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = (ev) => {
    ev.preventDefault();
    setOpen((prev) => !prev);
  };

  const closedMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", ({ target: { innerWidth } }) => {
      if (innerWidth > 1200) {
        setOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    if (open) {
      document.body.className = "overflow-hidden";
      document.body.scroll = "no";
    } else {
      document.body.className = "overflow-auto";
      document.body.scroll = "yes";
    }
  }, [open]);

  return (
    <header className="sticky bg-white top-0 w-full z-20">
      <div className="flex justify-between items-center text-xs font-semibold px-8 py-4 border-b border-black/10">
        <div className="flex gap-8">
          <NavLink exact onClick={closedMenu} to="/">
            <svg
              width="24"
              height="32"
              viewBox="0 0 24 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0571 21.3298H23.9943L16.0216 14.2417L12.0571 21.3298Z"
                fill="#FF7FAC"
              />
              <path
                d="M11.9916 10.6704L7.9834 14.2308L11.9698 21.3298H12.0571L16.0216 14.2417L11.9916 10.6704Z"
                fill="#FF4C80"
              />
              <path
                d="M7.98363 14.2305L0 21.3295H11.97L7.98363 14.2305Z"
                fill="#FF745B"
              />
              <path
                d="M12.0139 21.406L12.0576 21.3296H11.9702L12.0139 21.406Z"
                fill="#FF9D51"
              />
              <path
                d="M11.9919 32.0001L15.9455 28.4834L8.08203 28.5162L11.9919 32.0001Z"
                fill="#FF745B"
              />
              <path
                d="M8.04932 28.4943L8.08208 28.5162L15.9456 28.4834L15.9783 28.4616L12.0138 21.4062L8.04932 28.4943Z"
                fill="#FFB955"
              />
              <path
                d="M12.0574 21.3296L12.0137 21.406L15.9782 28.4613L23.9946 21.3296H12.0574Z"
                fill="#FF9B92"
              />
              <path
                d="M11.97 21.3296H0L8.04916 28.4941L12.0137 21.406L11.97 21.3296Z"
                fill="#FF9D51"
              />
              <path d="M0 0V21.3297L7.98363 14.2307L0 0Z" fill="#FF9D51" />
              <path
                d="M11.9918 10.6703L0 0L7.98363 14.2307L11.9918 10.6703Z"
                fill="#FFB955"
              />
              <path
                d="M23.9944 0L11.9917 10.6703L16.0217 14.2417L23.9944 0Z"
                fill="#E3398B"
              />
              <path
                d="M23.9947 21.3297V0L16.022 14.2417L23.9947 21.3297Z"
                fill="#F766B7"
              />
            </svg>
          </NavLink>
          <div className="hidden laptop:flex gap-4 items-center">
            <NavLink
              to="about"
              className={({ isActive }) => (!isActive ? "" : "activeNavLink")}
            >
              <span>About</span>
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) => (!isActive ? "" : "activeNavLink")}
            >
              <span>Contact</span>
            </NavLink>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="hidden laptop:flex gap-4 font-semibold">
            <p className="text-accent">hello@robertfox.design</p>
            <p>{`(704) 555-0127`}</p>
          </div>
          <p className="hidden laptop:flex text-black/25">|</p>
          <div className="flex gap-4 items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7309 4.22817C18.7309 4.19379 18.7 4.17317 18.6725 4.19723C18.1328 4.66473 16.83 5.04286 16.665 5.06004C16.6601 5.06222 16.6549 5.06335 16.6495 5.06335C16.6442 5.06335 16.6389 5.06222 16.6341 5.06004C15.6784 3.53379 13.475 3.94629 13.475 3.94629C10.2369 4.63379 10.5944 7.90629 10.6563 8.25004C10.6563 8.26723 10.6563 8.28098 10.6253 8.28098C7.02281 8.45973 3.8775 5.11161 3.52 4.71629C3.51645 4.71197 3.51199 4.7085 3.50694 4.70611C3.50189 4.70372 3.49637 4.70248 3.49078 4.70248C3.48519 4.70248 3.47968 4.70372 3.47462 4.70611C3.46957 4.7085 3.46511 4.71197 3.46156 4.71629C3.05729 5.46576 2.9291 6.33341 3.09936 7.16776C3.26962 8.00211 3.72753 8.75015 4.39313 9.28129C4.39883 9.28462 4.40357 9.28939 4.40686 9.29512C4.41015 9.30085 4.41188 9.30734 4.41188 9.31395C4.41188 9.32056 4.41015 9.32705 4.40686 9.33278C4.40357 9.33851 4.39883 9.34327 4.39313 9.34661C3.92365 9.33193 3.4595 9.24258 3.01813 9.08192C2.9975 9.08192 2.97344 9.08192 2.97344 9.11629C3.02156 11.2475 5.11156 12.21 5.59625 12.4129C5.60313 12.4151 5.60912 12.4195 5.61336 12.4254C5.61761 12.4312 5.61989 12.4383 5.61989 12.4455C5.61989 12.4528 5.61761 12.4598 5.61336 12.4657C5.60912 12.4715 5.60313 12.4759 5.59625 12.4782C5.16189 12.5728 4.71613 12.6041 4.27281 12.571C4.26685 12.5708 4.26091 12.5719 4.25549 12.5744C4.25008 12.577 4.24533 12.5807 4.24164 12.5854C4.23795 12.5901 4.23543 12.5956 4.23427 12.6015C4.23312 12.6073 4.23337 12.6134 4.235 12.6191C4.67156 14.2622 6.81313 14.9497 7.19813 15.0632C7.20457 15.0645 7.21055 15.0676 7.21547 15.072C7.22039 15.0763 7.22407 15.0819 7.22615 15.0882C7.22824 15.0945 7.22865 15.1011 7.22735 15.1076C7.22605 15.1141 7.22309 15.1201 7.21875 15.125C5.89531 16.3075 3.28625 16.6204 2.75 16.6754C2.74288 16.6763 2.73617 16.6793 2.73066 16.6839C2.72516 16.6885 2.72108 16.6946 2.71892 16.7015C2.71675 16.7083 2.71659 16.7156 2.71844 16.7226C2.72029 16.7295 2.72409 16.7358 2.72938 16.7407C4.73 18.1157 9.96875 19.2569 13.97 15.8366C15.1529 14.8057 16.0876 13.5208 16.7043 12.0779C17.3209 10.6351 17.6036 9.07154 17.5313 7.50411C17.5313 7.49838 17.5329 7.49278 17.536 7.48792C17.539 7.48307 17.5433 7.47915 17.5484 7.47661C18.267 7.05456 18.8658 6.45581 19.2878 5.73723C19.2878 5.70286 19.2878 5.68223 19.2363 5.69254C18.8883 5.81481 18.5126 5.83508 18.1534 5.75098C18.1534 5.75098 18.7413 4.73348 18.7309 4.22817Z"
                stroke="#261F22"
                strokeWidth="1.03125"
                strokeLinecap="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8763 4.88257H9.1238C6.94296 4.88257 5.17505 6.65048 5.17505 8.83132V15.1726C5.17505 17.3534 6.94296 19.1213 9.1238 19.1213H14.8763C17.0571 19.1213 18.825 17.3534 18.825 15.1726V8.83132C18.825 6.65048 17.0571 4.88257 14.8763 4.88257Z"
                stroke="#261F22"
                strokeWidth="1.125"
                strokeLinecap="round"
              />
              <path
                d="M12 15.48C13.922 15.48 15.48 13.922 15.48 12C15.48 10.0781 13.922 8.52002 12 8.52002C10.0781 8.52002 8.52002 10.0781 8.52002 12C8.52002 13.922 10.0781 15.48 12 15.48Z"
                stroke="#261F22"
                strokeWidth="1.125"
                strokeLinecap="round"
              />
              <path
                d="M16.1663 7.89747C16.4396 7.89747 16.6613 7.67585 16.6613 7.40247C16.6613 7.12909 16.4396 6.90747 16.1663 6.90747C15.8929 6.90747 15.6713 7.12909 15.6713 7.40247C15.6713 7.67585 15.8929 7.89747 16.1663 7.89747Z"
                stroke="#261F22"
                strokeWidth="1.125"
              />
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_103_406)">
                <path
                  d="M8 0.25C3.72662 0.25 0.25 3.72662 0.25 8C0.25 12.2734 3.72662 15.75 8 15.75C12.2734 15.75 15.75 12.2734 15.75 8C15.75 3.72662 12.2734 0.25 8 0.25ZM13.1241 3.82394C14.046 4.95038 14.6043 6.38509 14.6189 7.94753C14.4007 7.90137 12.2121 7.45747 10.0095 7.73447C9.82972 7.29569 9.66006 6.90969 9.42769 6.43403C11.8752 5.43475 12.9845 4.01272 13.1241 3.82394ZM12.3882 3.05844C12.2691 3.22803 11.2726 4.56738 8.91875 5.44966C7.834 3.45666 6.63172 1.81941 6.44875 1.57441C8.548 1.06837 10.7602 1.61409 12.3882 3.05844ZM5.18566 2.01938C5.36019 2.25872 6.54309 3.898 7.63994 5.84778C4.54347 6.67006 1.81619 6.65822 1.52013 6.65431C1.94938 4.60016 3.33369 2.89291 5.18566 2.01938ZM1.38031 8.01009C1.38031 7.94241 1.38166 7.87503 1.38369 7.80781C1.67331 7.81375 4.88119 7.85509 8.187 6.86575C8.3765 7.23662 8.55753 7.61309 8.72369 7.98916C6.32997 8.66337 4.15513 10.5994 3.08209 12.4362C2.02481 11.2627 1.38031 9.71031 1.38031 8.01009ZM3.93678 13.2324C4.62825 11.8188 6.50484 9.99419 9.17362 9.08375C10.103 11.4988 10.4873 13.5229 10.5858 14.1037C8.45728 15.0103 5.89781 14.7616 3.93678 13.2324ZM11.6987 13.4977C11.6308 13.095 11.2785 11.1571 10.4127 8.77787C12.487 8.44581 14.3095 8.98938 14.536 9.06084C14.2409 10.9028 13.1837 12.4935 11.6987 13.4977Z"
                  fill="#261F22"
                />
              </g>
              <defs>
                <clipPath id="clip0_103_406">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="laptop:hidden text-black/25">|</p>
          <button
            onClick={toggleMenu}
            className="laptop:hidden items-center p-0"
          >
            {!open ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.87988 12H21.1199"
                  stroke="#261F22"
                  strokeWidth="1.125"
                />
                <path
                  d="M2.87988 5.98877H21.1199"
                  stroke="#261F22"
                  strokeWidth="1.125"
                />
                <path
                  d="M2.87988 18.0112H21.1199"
                  stroke="#261F22"
                  strokeWidth="1.125"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                  stroke="#261F22"
                  strokeWidth="1.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`${
          open ? "" : "hidden"
        } fixed transition-opacity top-[75px] overscroll-contain laptop:hidden w-full text-right z-10 text-sm`}
      >
        <div
          onClick={toggleMenu}
          className="fixed w-screen h-full bg-black/30 overscroll-contain"
        ></div>
        <div
          className={`relative inline-flex flex-col overscroll-contain tablet:w-[320px] w-full h-[calc(100vh-75px)] bg-white text-left justify-between`}
        >
          <nav className="w-full mx-auto max-w-[320px]">
            <ul>
              <NavLink
                to="about"
                onClick={closedMenu}
                className={({ isActive }) =>
                  "font-semibold " + (!isActive ? "" : "activeNavLink_Menu")
                }
                data-nav="About"
              >
                <li className="px-6 py-3 mt-2">About</li>
              </NavLink>
              <NavLink
                to="contact"
                onClick={closedMenu}
                className={({ isActive }) =>
                  "font-semibold " + (!isActive ? "" : "activeNavLink_Menu")
                }
                data-nav="Contact"
              >
                <li className="px-6 py-3">Contact</li>
              </NavLink>
            </ul>
          </nav>
          <div className="bg-light rounded mx-6 my-3 flex phone:flex-col gap-4 font-semibold flex-wrap px-6 py-3">
            <p className="text-accent">hello@robertfox.design</p>
            <p className="whitespace-nowrap">{`(704) 555-0127`}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
