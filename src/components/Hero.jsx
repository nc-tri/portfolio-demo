import { useRoutes } from "react-router";
import { Link } from "react-router-dom";

export default function Hero() {
  // const router = useRoutes();
  // const scrollToMyWork = () => {
  //   router.push("#myWork");
  // };
  return (
    <div className="flex flex-col phone:px-8 tablet:px-16 px-32 gap-y-4 laptop:gap-y-8 text-center">
      <h3 className="text-brand-gradient">Hey, I'm Robert Fox</h3>
      <h1 className="font-semibold">Freelance UI Designer & Web Developer</h1>
      <div className="flex flex-col laptop:px-32 gap-12">
        <p className="text-black/75">
          I help business grow by crafting amazing web experiences. If you’re
          looking for a designer and developer that likes to get stuff done,
          let’s talk.
        </p>
        <div>
          <a href="#myWork">
            <button className="m-auto flex flex-none order-1 grow-0 bg-brand-gradient items-center gap-2 drop-shadow-lg">
              <p className="text-white text-sm font-semibold">See my work</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.7 27.35V4.625" stroke="white" strokeWidth="2" />
                <path
                  d="M25.7047 18.7347L16.6247 27.3497L8.35474 18.7347"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
