export default function MyWork() {
  return (
    <div id="myWork" className="flex flex-col gap-y-16">
      <div className="flex flex-col gap-4 max-w-[640px] m-auto text-center">
        <h3 className="font-bold">My Work</h3>
        <p>
          I specialize in website design and development, but I’ve also designed
          successful iOS and Android apps.
        </p>
      </div>
      <div className="flex flex-col gap-y-32">
        <div className="relative pt-[50%] over:pt-[900px]">
          <div className="absolute top-0 left-0 w-full bg-[#7F63F4]">
            <img
              src={new URL("../assets/bg/bg-1.png", import.meta.url)}
              className="max-w-[1544px] w-full drop-shadow-lg mx-auto phone:px-8 tablet:px-8 px-12 top-0 translate-y-[64px]"
              alt="bg-1"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-32">
        <div className="relative pt-[50%] over:pt-[900px]">
          <div className="absolute top-0 left-0 w-full bg-[#43CB83]">
            <img
              src={new URL("../assets/bg/bg-2.png", import.meta.url)}
              className="max-w-[1544px] w-full drop-shadow-lg mx-auto phone:px-8 tablet:px-8 px-12 top-0 translate-y-[64px]"
              alt="bg-2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 m-auto text-center max-w-[840px] px-8">
        <h4>{`“Working with Robert has been an absolute pleasure and we’ll definitely turn to his expertise for new projects.”`}</h4>
        <div>
          <div className="flex justify-center">
            <div className="flex -space-x-2 overflow-hidden mb-4">
              <img
                src={new URL("../assets/avatar/av-1.png", import.meta.url)}
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
          </div>
          <div className="flex flex-col">
            <span className="text-black text-sm">James Wittings</span>
            <span className="text-sm">Marketing Director at Amazon</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-32">
        <div className="relative pt-[50%] over:pt-[900px]">
          <div className="absolute top-0 left-0 w-full bg-[#F08084]">
            <img
              src={new URL("../assets/bg/bg-3.png", import.meta.url)}
              className="max-w-[1544px] w-full drop-shadow-lg mx-auto phone:px-8 tablet:px-8 px-12 top-0 translate-y-[64px]"
              alt="bg-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
