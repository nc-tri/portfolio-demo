import CTA from "../components/CTA";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col gap-12 laptop:gap-32">
        <div className="flex flex-col gap-4 px-16 phone:px-8 tablet:px-16 laptop:px-32">
          <h2 className="font-semibold">I’m Robert Fox.</h2>
          <div className="laptop:pr-[240px]">
            <p className="whitespace-pre-line">
              {`I was born in Henderson, Nevada almost three decades ago. From an early age I showed interest for computers and that grew into a passion during high school.

          I got into web design and development in college. Attending the Carnegie Mellon University in Pittsburgh was the best decision I ever made because it showed me what I wanted to do for the rest of my life.

          Currently I help businesses all around the world by designing and coding websites and mobile apps.

          I had the pleasure of working with big companies like Apple, Microsoft and Amazon, just to name a few.

          Right now I’m based in New York.`}
            </p>
          </div>
        </div>
        <div className="flex phone:flex-col w-full justify-between gap-4">
          <div className="flex-1">
            <img
              src={new URL("../assets/img/about-1.png", import.meta.url)}
              className="w-full drop-shadow-lg"
              alt="about-1"
            />
          </div>
          <div className="flex-1">
            <img
              src={new URL("../assets/img/about-2.png", import.meta.url)}
              className="w-full drop-shadow-lg"
              alt="about-2"
            />
          </div>
          <div className="flex-1">
            <img
              src={new URL("../assets/img/about-3.png", import.meta.url)}
              className="w-full drop-shadow-lg"
              alt="about-3"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 px-16 phone:px-8 tablet:px-16 laptop:px-32">
        <h3 className="laptop:w-1/2">
          Regardless of project size, you will always get:
        </h3>
        <div className="flex flex-col laptop:flex-row gap-12">
          <div className="flex flex-col gap-4">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 51.6301C43.2445 51.6301 52.36 42.5146 52.36 31.2701C52.36 20.0256 43.2445 10.9101 32 10.9101C20.7555 10.9101 11.64 20.0256 11.64 31.2701C11.64 42.5146 20.7555 51.6301 32 51.6301Z"
                stroke="#FE572E"
                strokeWidth="3"
              />
              <path
                d="M31.36 16.5801V31.9901L38.76 37.6601"
                stroke="#FE572E"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M13.64 53.4301L18.25 46.3001"
                stroke="#FE572E"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M45.84 46.3001L50.45 53.4301"
                stroke="#FE572E"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M9.15005 19.4001C7.97722 18.1958 7.32092 16.5812 7.32092 14.9001C7.32092 13.2191 7.97722 11.6045 9.15005 10.4001C9.71974 9.81165 10.4019 9.3437 11.1561 9.02412C11.9103 8.70454 12.721 8.53986 13.54 8.53986C14.3591 8.53986 15.1698 8.70454 15.924 9.02412C16.6781 9.3437 17.3604 9.81165 17.93 10.4001L9.15005 19.4001ZM54.87 19.4001C56.0429 18.1958 56.6992 16.5812 56.6992 14.9001C56.6992 13.2191 56.0429 11.6045 54.87 10.4001C54.3004 9.81165 53.6181 9.3437 52.864 9.02412C52.1098 8.70454 51.2991 8.53986 50.48 8.53986C49.661 8.53986 48.8503 8.70454 48.0961 9.02412C47.3419 9.3437 46.6597 9.81165 46.09 10.4001L54.87 19.4001Z"
                stroke="#FE572E"
                strokeWidth="3"
              />
            </svg>
            <h5 className="font-semibold">On-time delivery</h5>
            <p>
              I know time is money so I don’t want to waste yours. Or mine. So I
              guarantee that I will always deliver what you pay for as promised.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.52 60.3201C44.7977 60.3201 53.94 51.1778 53.94 39.9001C53.94 28.6224 44.7977 19.4801 33.52 19.4801C22.2424 19.4801 13.1 28.6224 13.1 39.9001C13.1 51.1778 22.2424 60.3201 33.52 60.3201Z"
                stroke="#FE572E"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M33.65 27.9101L37.29 35.2901C37.2989 35.3097 37.3128 35.3265 37.3304 35.3388C37.348 35.3511 37.3686 35.3585 37.39 35.3601L45.54 36.5501C45.5656 36.5526 45.59 36.5626 45.6099 36.5789C45.6299 36.5952 45.6445 36.617 45.652 36.6417C45.6595 36.6663 45.6595 36.6926 45.652 36.7173C45.6446 36.7419 45.6299 36.7638 45.61 36.7801L39.72 42.5201C39.7084 42.538 39.7022 42.5588 39.7022 42.5801C39.7022 42.6014 39.7084 42.6223 39.72 42.6401L41.11 50.7601C41.1124 50.7849 41.1083 50.8098 41.0979 50.8324C41.0875 50.855 41.0713 50.8744 41.051 50.8887C41.0306 50.9029 41.0068 50.9115 40.982 50.9135C40.9573 50.9155 40.9324 50.9109 40.91 50.9001L33.63 47.0701C33.6097 47.0604 33.5875 47.0553 33.565 47.0553C33.5425 47.0553 33.5203 47.0604 33.5 47.0701L26.18 50.9001C26.1576 50.9109 26.1327 50.9155 26.1079 50.9135C26.0832 50.9115 26.0594 50.9029 26.039 50.8887C26.0187 50.8744 26.0025 50.855 25.9921 50.8324C25.9817 50.8098 25.9775 50.7849 25.98 50.7601L27.37 42.6401C27.3789 42.6214 27.3835 42.6009 27.3835 42.5801C27.3835 42.5594 27.3789 42.5389 27.37 42.5201L21.48 36.7801C21.4601 36.7638 21.4454 36.7419 21.4379 36.7173C21.4305 36.6926 21.4305 36.6663 21.438 36.6417C21.4455 36.617 21.4601 36.5952 21.4801 36.5789C21.5 36.5626 21.5243 36.5526 21.55 36.5501L29.7 35.3601C29.7214 35.3585 29.742 35.3511 29.7596 35.3388C29.7771 35.3265 29.7911 35.3097 29.8 35.2901L33.44 27.9101C33.4531 27.8952 33.4693 27.8833 33.4874 27.8751C33.5055 27.867 33.5251 27.8627 33.545 27.8627C33.5649 27.8627 33.5845 27.867 33.6026 27.8751C33.6207 27.8833 33.6369 27.8952 33.65 27.9101V27.9101Z"
                stroke="#FE572E"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M21.48 23.7501L9.89001 3.6701H19.97L29.04 19.3801L19.97 3.6701"
                stroke="#FE572E"
                strokeWidth="3"
              />
              <path
                d="M44.82 22.8901L55.92 3.6701H45.79L36.77 19.3801"
                stroke="#FE572E"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <h5 className="font-semibold">Quality</h5>
            <p>
              I don’t want to put my name on something subpar so my first
              concern is always quality. No matter what, you will love the end
              result.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-light px-16 phone:px-8 phone:py-8 tablet:py-12 laptop:py-16">
        <div className="flex flex-col laptop:flex-row gap-12">
          <div className="bg-white phone:py-8 tablet:py-12 laptop:py-16 px-8 rounded drop-shadow-lg">
            <div className="flex flex-col gap-8 text-center">
              <h5>
                “Working with Robert has been an absolute pleasure and we’ll
                definitely turn to his expertise for new projects.”
              </h5>
              <div>
                <div className="flex flex-col justify-center">
                  <div className="flex -space-x-2 overflow-hidden mb-4 m-auto">
                    <img
                      src={
                        new URL("../assets/avatar/av-1.png", import.meta.url)
                      }
                      className="inline-block"
                      alt="bg-2"
                    />
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="32" cy="32.0001" r="32" fill="#F3F2F1" />
                      <path
                        d="M34.0749 26.1689C31.0312 26.2814 23.4812 27.1376 23.4812 33.5126C23.4812 40.3564 32.1249 40.6376 34.9499 36.2126C35.3561 36.8501 37.1624 38.5564 37.7811 39.1376L41.3311 35.6376C41.3311 35.6376 39.3124 34.0564 39.3124 32.3376V23.1439C39.3124 21.5626 37.7812 18.0001 32.2937 18.0001C26.7937 18.0001 23.8749 21.4376 23.8749 24.5189L28.4687 24.9439C29.4874 21.8501 31.8562 21.8501 31.8562 21.8501C34.3999 21.8439 34.0749 23.7126 34.0749 26.1689ZM34.0749 31.5939C34.0749 36.5939 28.8124 35.8439 28.8124 32.6689C28.8124 29.7189 31.9687 29.1251 34.0749 29.0564V31.5939ZM42.5749 41.8126C42.0937 42.4376 38.1999 46.0001 31.6687 46.0001C25.1374 46.0001 20.1374 41.5314 18.6062 39.6876C18.1812 39.2064 18.6687 38.9814 18.9499 39.1689C23.5312 41.9501 30.6874 46.5314 42.2311 41.0626C42.6999 40.8314 43.0624 41.1876 42.5749 41.8126ZM45.0624 41.9501C44.6561 42.9376 44.0624 43.6251 43.7374 43.8876C43.3936 44.1689 43.1436 44.0564 43.3311 43.6501C43.5186 43.2439 44.5374 40.7439 44.1249 40.2126C43.7186 39.6939 41.8124 39.9439 41.1249 40.0126C40.4499 40.0751 40.3124 40.1376 40.2499 39.9939C40.1061 39.6376 41.6061 39.0251 42.5936 38.9001C43.5749 38.7876 45.1561 38.8501 45.4686 39.2564C45.6999 39.5751 45.4686 40.9501 45.0624 41.9501Z"
                        fill="#261F22"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-black text-sm">James Wittings</span>
                    <span className="text-sm">
                      Marketing Director at Amazon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white phone:py-8 tablet:py-12 laptop:py-16 px-8 rounded drop-shadow-lg">
            <div className="flex flex-col gap-8 text-center">
              <h5>
                “Robert is great. We worked together really well and we’ll
                definitely contract his services in the future.”
              </h5>
              <div>
                <div className="flex flex-col justify-center">
                  <div className="flex -space-x-2 overflow-hidden mb-4 m-auto">
                    <img
                      src={
                        new URL("../assets/avatar/av-2.png", import.meta.url)
                      }
                      className="inline-block"
                      alt="bg-2"
                    />
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="32" cy="32" r="32" fill="#F3F2F1" />
                      <path
                        d="M26.3687 40.8375C26.3687 40.9625 26.225 41.0625 26.0437 41.0625C25.8375 41.0812 25.6938 40.9812 25.6938 40.8375C25.6938 40.7125 25.8375 40.6125 26.0188 40.6125C26.2063 40.5938 26.3687 40.6938 26.3687 40.8375ZM24.425 40.5562C24.3813 40.6812 24.5063 40.825 24.6938 40.8625C24.8563 40.925 25.0437 40.8625 25.0813 40.7375C25.1188 40.6125 25 40.4688 24.8125 40.4125C24.65 40.3687 24.4688 40.4312 24.425 40.5562ZM27.1875 40.45C27.0063 40.4938 26.8812 40.6125 26.9 40.7563C26.9187 40.8813 27.0813 40.9625 27.2688 40.9188C27.45 40.875 27.575 40.7563 27.5562 40.6313C27.5375 40.5125 27.3687 40.4313 27.1875 40.45ZM31.3 16.5C22.6313 16.5 16 23.0813 16 31.75C16 38.6812 20.3625 44.6125 26.5938 46.7C27.3938 46.8438 27.675 46.35 27.675 45.9438C27.675 45.5562 27.6562 43.4188 27.6562 42.1063C27.6562 42.1063 23.2812 43.0437 22.3625 40.2437C22.3625 40.2437 21.65 38.425 20.625 37.9562C20.625 37.9562 19.1937 36.975 20.725 36.9937C20.725 36.9937 22.2812 37.1188 23.1375 38.6063C24.5062 41.0188 26.8 40.325 27.6938 39.9125C27.8375 38.9125 28.2438 38.2188 28.6938 37.8062C25.2 37.4187 21.675 36.9125 21.675 30.9C21.675 29.1812 22.15 28.3188 23.15 27.2188C22.9875 26.8125 22.4563 25.1375 23.3125 22.975C24.6187 22.5687 27.625 24.6625 27.625 24.6625C28.875 24.3125 30.2188 24.1313 31.55 24.1313C32.8813 24.1313 34.225 24.3125 35.475 24.6625C35.475 24.6625 38.4813 22.5625 39.7875 22.975C40.6438 25.1438 40.1125 26.8125 39.95 27.2188C40.95 28.325 41.5625 29.1875 41.5625 30.9C41.5625 36.9312 37.8813 37.4125 34.3875 37.8062C34.9625 38.3 35.45 39.2375 35.45 40.7062C35.45 42.8125 35.4312 45.4187 35.4312 45.9312C35.4312 46.3375 35.7188 46.8312 36.5125 46.6875C42.7625 44.6125 47 38.6812 47 31.75C47 23.0813 39.9688 16.5 31.3 16.5ZM22.075 38.0562C21.9937 38.1187 22.0125 38.2625 22.1188 38.3813C22.2188 38.4813 22.3625 38.525 22.4437 38.4438C22.525 38.3813 22.5062 38.2375 22.4 38.1187C22.3 38.0187 22.1562 37.975 22.075 38.0562ZM21.4 37.55C21.3563 37.6312 21.4187 37.7313 21.5437 37.7938C21.6437 37.8563 21.7688 37.8375 21.8125 37.75C21.8562 37.6688 21.7937 37.5688 21.6687 37.5063C21.5437 37.4688 21.4437 37.4875 21.4 37.55ZM23.425 39.775C23.325 39.8562 23.3625 40.0438 23.5062 40.1625C23.65 40.3062 23.8312 40.325 23.9125 40.225C23.9938 40.1438 23.9563 39.9562 23.8313 39.8375C23.6938 39.6938 23.5063 39.675 23.425 39.775ZM22.7125 38.8563C22.6125 38.9188 22.6125 39.0813 22.7125 39.225C22.8125 39.3687 22.9812 39.4312 23.0625 39.3687C23.1625 39.2875 23.1625 39.125 23.0625 38.9813C22.975 38.8375 22.8125 38.775 22.7125 38.8563Z"
                        fill="#261F22"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-black text-sm">Sandra Marks</span>
                    <span className="text-sm">Creative Director at GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 w-full phone:px-8 tablet:px-16 laptop:px-32">
        <div className="flex">
          <div className="flex flex-col laptop:flex-row gap-12">
            <div className="flex flex-1 flex-col gap-4">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.79 44L19.39 34.6C19.39 34.6 31.76 5.40999 56.77 6.99999C56.77 6.99999 60.25 30.12 28.79 44Z"
                  stroke="#FE572E"
                  strokeWidth="3"
                />
                <path
                  d="M56 16.82C53.724 16.4555 51.6229 15.3769 50 13.74C48.3314 12.0761 47.2412 9.92023 46.89 7.59003"
                  stroke="#FE572E"
                  strokeWidth="3"
                />
                <path
                  d="M42.32 26.92C45.3465 26.92 47.8 24.4665 47.8 21.44C47.8 18.4135 45.3465 15.96 42.32 15.96C39.2934 15.96 36.84 18.4135 36.84 21.44C36.84 24.4665 39.2934 26.92 42.32 26.92Z"
                  stroke="#FE572E"
                  strokeWidth="3"
                />
                <path
                  d="M21.49 36.68C14.94 38.78 14.61 49.15 14.61 49.15C14.61 49.15 24.69 49.26 27.2 42.39M30.61 43.16L30 47.84C29.9951 47.8815 30.0011 47.9237 30.0175 47.9622C30.0339 48.0007 30.06 48.0342 30.0934 48.0595C30.1268 48.0848 30.1661 48.1009 30.2076 48.1062C30.2491 48.1116 30.2913 48.106 30.33 48.09L38.33 44.62C38.6577 44.4695 38.9457 44.2448 39.1714 43.9636C39.3971 43.6824 39.5541 43.3525 39.63 43L40.85 37.17L30.61 43.16ZM20 33.29L15.31 33.89C15.2697 33.8951 15.2287 33.8895 15.1913 33.8737C15.1538 33.8578 15.1212 33.8324 15.0968 33.7998C15.0725 33.7673 15.0571 33.7289 15.0524 33.6885C15.0477 33.6482 15.0538 33.6073 15.07 33.57L18.53 25.62C18.6797 25.2775 18.9095 24.9761 19.2002 24.7411C19.4908 24.5062 19.8338 24.3446 20.2 24.27L26.02 23.05L20 33.29Z"
                  stroke="#FE572E"
                  strokeWidth="3"
                />
                <path
                  d="M10.88 52.82L7.12 56.59"
                  stroke="#FE572E"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M10.6 45.63L7.41003 48.81"
                  stroke="#FE572E"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M17.94 53.11L14.76 56.3"
                  stroke="#FE572E"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <h5 className="font-semibold">
                I can design and build an eCommerce store
              </h5>
              <p>
                I have extensive knowledge of development on the front-end and
                back-end so I’m able to deliver a completely functional
                eCommerce website.
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <svg
                width="65"
                height="64"
                viewBox="0 0 65 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.28662 9.96002H16.0066L22.3766 37.85H50.3566L56.8366 16.35L17.3366 15.79"
                  stroke="#FE572E"
                  strokeWidth="3"
                />
                <path
                  d="M52.3966 44.35H22.3366C21.9033 44.3595 21.4725 44.2812 21.0702 44.1198C20.6679 43.9583 20.3025 43.7171 19.996 43.4106C19.6895 43.1041 19.4483 42.7387 19.2868 42.3364C19.1254 41.9341 19.0471 41.5033 19.0566 41.07C19.0566 37.85 22.3766 37.85 22.3766 37.85"
                  stroke="#FE572E"
                  strokeWidth="3"
                />
                <path
                  d="M25.6166 55.14C27.5662 55.14 29.1466 53.5596 29.1466 51.61C29.1466 49.6605 27.5662 48.08 25.6166 48.08C23.667 48.08 22.0866 49.6605 22.0866 51.61C22.0866 53.5596 23.667 55.14 25.6166 55.14Z"
                  stroke="#FE572E"
                  strokeWidth="3"
                />
                <path
                  d="M46.7066 55.14C48.6562 55.14 50.2366 53.5596 50.2366 51.61C50.2366 49.6605 48.6562 48.08 46.7066 48.08C44.7571 48.08 43.1766 49.6605 43.1766 51.61C43.1766 53.5596 44.7571 55.14 46.7066 55.14Z"
                  stroke="#FE572E"
                  strokeWidth="3"
                />
              </svg>
              <h5 className="font-semibold">
                I can design and build an eCommerce store
              </h5>
              <p>
                I don’t want to put my name on something subpar so my first
                concern is always quality. No matter what, you will love the end
                result.{" "}
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <svg
                width="65"
                height="64"
                viewBox="0 0 65 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.1733 7.27002H21.9733C20.2777 7.27002 18.9033 8.64451 18.9033 10.34V56.06C18.9033 57.7555 20.2777 59.13 21.9733 59.13H43.1733C44.8688 59.13 46.2433 57.7555 46.2433 56.06V10.34C46.2433 8.64451 44.8688 7.27002 43.1733 7.27002Z"
                  stroke="#FE572E"
                  strokeWidth="3"
                />
                <path
                  d="M27.5833 11.54H33.6633"
                  stroke="#FE572E"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M31.0533 54.67H34.0933"
                  stroke="#FE572E"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M37.4433 11.54H37.5733"
                  stroke="#FE572E"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M18.9033 50.56H46.2433"
                  stroke="#FE572E"
                  strokeWidth="3"
                />
                <path
                  d="M18.9033 15.95H46.2433"
                  stroke="#FE572E"
                  strokeWidth="3"
                />
              </svg>
              <h5 className="font-semibold">
                I can design and build a mobile app for iOS and Android
              </h5>
              <p>
                I recently started designing and coding mobile apps and I love
                it. It’s a different process compared to traditional website
                design but I’ve been successful in all projects so far.
              </p>
            </div>
          </div>
        </div>
        <div className="inline-flex bg-light m-auto rounded-full phone:w-full">
          <button className="bg-black phone:flex-1">
            <p className="phone:hidden tablet:hidden laptop:block">
              Tools I Use for Design
            </p>
            <p className="phone:hidden tablet:block laptop:hidden">Design</p>
            <p className="phone:block tablet:hidden laptop:hidden">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto"
              >
                <path
                  d="M24.5299 3.62012H6.62988C6.35374 3.62012 6.12988 3.84397 6.12988 4.12012V9.64512C6.12988 9.92126 6.35374 10.1451 6.62988 10.1451H24.5299C24.806 10.1451 25.0299 9.92126 25.0299 9.64512V4.12012C25.0299 3.84397 24.806 3.62012 24.5299 3.62012Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M15.5801 19.135V17C15.5802 16.9532 15.5946 16.9075 15.6214 16.869C15.6483 16.8306 15.6862 16.8013 15.7301 16.785L27.8101 12.285C27.854 12.2703 27.8922 12.242 27.9191 12.2043C27.946 12.1666 27.9604 12.1214 27.9601 12.075V7.11001C27.9601 7.08046 27.9543 7.0512 27.943 7.02391C27.9316 6.99661 27.9151 6.9718 27.8942 6.95091C27.8733 6.93002 27.8485 6.91344 27.8212 6.90214C27.7939 6.89083 27.7646 6.88501 27.7351 6.88501H25.0351"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M17.2401 19.135H14.1201C13.844 19.135 13.6201 19.3589 13.6201 19.635V27.875C13.6201 28.1512 13.844 28.375 14.1201 28.375H17.2401C17.5163 28.375 17.7401 28.1512 17.7401 27.875V19.635C17.7401 19.3589 17.5163 19.135 17.2401 19.135Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M4.54004 5.29492H6.13004V8.29492H4.54004C4.40743 8.29492 4.28025 8.24224 4.18649 8.14848C4.09272 8.05471 4.04004 7.92753 4.04004 7.79492V5.79492C4.04004 5.66231 4.09272 5.53514 4.18649 5.44137C4.28025 5.3476 4.40743 5.29492 4.54004 5.29492V5.29492Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </p>
          </button>
          <button className="phone:flex-1">
            <p className="phone:hidden tablet:hidden laptop:block text-black/50">
              Tools I Use for Development
            </p>
            <p className="phone:hidden tablet:block laptop:hidden text-black/50">
              Development
            </p>
            <p className="phone:block tablet:hidden laptop:hidden text-black/50">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto"
              >
                <path
                  d="M18.31 6.5249L13.54 25.4749"
                  stroke="#261F22"
                  strokeoinejoin="0.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.1293 10.99L6.4043 16.005L11.1293 21.01"
                  stroke="#261F22"
                  strokeoinejoin="0.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.8701 10.99L25.5951 16.005L20.8701 21.01"
                  stroke="#261F22"
                  strokeoinejoin="0.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </button>
        </div>
        <div className="flex phone:flex-col laptop:justify-between tablet:justify-center tablet:flex-wrap tablet:max-w-[480px] tablet:m-auto gap-2">
          <div className="flex phone:flex-1 tablet:flex-none laptop:flex-col items-center gap-2 p-4 bg-light flex-1 text-center">
            <img
              src={new URL("../assets/img/sketch.png", import.meta.url)}
              className="inline-block w-[48px] h-[48px] laptop:m-auto"
              alt="sketch"
            />
            <h6 className="font-semibold">Sketch</h6>
          </div>
          <div className="flex tablet:flex-none laptop:flex-col items-center gap-2 p-4 bg-light flex-1 text-center">
            <img
              src={new URL("../assets/img/figma.png", import.meta.url)}
              className="inline-block w-[48px] h-[48px] laptop:m-auto"
              alt="figma"
            />
            <h6 className="font-semibold">Figma</h6>
          </div>
          <div className="flex tablet:flex-none laptop:flex-col items-center gap-2 p-4 bg-light flex-1 text-center">
            <img
              src={new URL("../assets/img/xd.png", import.meta.url)}
              className="inline-block w-[48px] h-[48px] laptop:m-auto"
              alt="xd"
            />
            <h6 className="font-semibold">Adobe XD</h6>
          </div>
          <div className="flex tablet:flex-none laptop:flex-col items-center gap-2 p-4 bg-light flex-1 text-center">
            <img
              src={new URL("../assets/img/photoshop.png", import.meta.url)}
              className="inline-block w-[48px] h-[48px] laptop:m-auto"
              alt="photoshop"
            />
            <h6 className="font-semibold">Adobe Photoshop</h6>
          </div>
          <div className="flex tablet:flex-none laptop:flex-col items-center gap-2 p-4 bg-light flex-1 text-center">
            <img
              src={new URL("../assets/img/illustrator.png", import.meta.url)}
              className="inline-block w-[48px] h-[48px] laptop:m-auto"
              alt="illustrator"
            />
            <h6 className="font-semibold">Adobe Illustrator</h6>
          </div>
        </div>
      </div>
      <div></div>
      <CTA />
    </>
  );
}
