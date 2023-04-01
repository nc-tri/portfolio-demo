import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    await emailjs
      .sendForm(
        "service_xbyuyw5",
        "template_io4uksd",
        formRef.current,
        "H_qqC-q48QkVFZwlD"
      )
      .then(
        (result) => {
          formRef.current.reset();
          alert("successfully!");
        },
        (error) => {
          alert("Error!");
        }
      )
      .finally(() => setLoading(false));
  };
  return (
    <>
      <div className="flex flex-col gap-16 phone:px-8 tablet:px-16 laptop:px-32">
        <div className="flex flex-col gap-4 laptop:w-1/2">
          <h4 className="font-semibold">
            I’m currently available for freelance work.
          </h4>
          <p>
            If you’re looking for a designer and developer that likes to get
            stuff done, let’s talk.
          </p>
          <div className="flex phone:flex-col gap-4 font-semibold flex-wrap">
            <button className="flex-1 bg-accent rounded">
              <p>hello@robertfox.design</p>
            </button>
            <button className="flex-1 bg-light rounded">
              <p className="text-black whitespace-nowrap">{`(704) 555-0127`}</p>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-light phone:px-8 tablet:px-16 laptop:px-32 py-16">
        <div className="flex flex-col gap-8 laptop:w-1/2">
          <h3>
            Before sending me a message, here are some things you should know:
          </h3>
          <div className="grid grid-cols-1 divide-y divide-black-10">
            <div className="flex flex-col gap-2 py-4">
              <div className="flex gap-2 items-baseline">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-none"
                >
                  <path
                    d="M8 1.75012V14.2501"
                    stroke="#FE572E"
                    strokeWidth="3"
                  />
                  <path
                    d="M1.75 8.00012H14.25"
                    stroke="#FE572E"
                    strokeWidth="3"
                  />
                </svg>
                <p className="font-bold text-black/50">
                  What timezone are you in?
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 py-4">
              <div className="flex gap-2 items-baseline">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-none"
                >
                  <path
                    d="M8 1.75012V14.2501"
                    stroke="#FE572E"
                    strokeWidth="3"
                  />
                  <path
                    d="M1.75 8.00012H14.25"
                    stroke="#FE572E"
                    strokeWidth="3"
                  />
                </svg>
                <p className="font-bold text-black/50">
                  Do we make a contract?
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 py-4">
              <div className="flex gap-2 items-baseline">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-none"
                >
                  <path
                    d="M8 1.75012V14.2501"
                    stroke="#FE572E"
                    strokeWidth="3"
                  />
                  <path
                    d="M1.75 8.00012H14.25"
                    stroke="#FE572E"
                    strokeWidth="3"
                  />
                </svg>
                <p className="font-bold text-black/50">
                  How much do you charge for a website?
                </p>
              </div>
            </div>
            <details
              className="[&_p]:open:text-black [&_#plus]:open:hidden flex flex-col gap-2 py-4"
              open
            >
              <summary className="flex gap-2 items-baseline">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-none"
                >
                  <path
                    id="plus"
                    d="M8 1.75012V14.2501"
                    stroke="#FE572E"
                    strokeWidth="3"
                  />
                  <path
                    d="M1.75 8.00012H14.25"
                    stroke="#FE572E"
                    strokeWidth="3"
                  />
                </svg>

                <p className="font-bold text-black/50" open>
                  Do you charge by the hour?
                </p>
              </summary>
              <p className="pl-5 text-black mt-2">
                I do not charge by the hour. I prefer to eliminate the stress of
                counting the hours. Instead, I charge a flat fee per project,
                regardless of duration.
              </p>
            </details>
            <div className="flex flex-col gap-2 py-4">
              <div className="flex gap-2 items-baseline">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-none"
                >
                  <path
                    d="M8 1.75012V14.2501"
                    stroke="#FE572E"
                    strokeWidth="3"
                  />
                  <path
                    d="M1.75 8.00012H14.25"
                    stroke="#FE572E"
                    strokeWidth="3"
                  />
                </svg>
                <p className="font-bold text-black/50">
                  Are you working with a team?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col laptop:flex-row phone:px-8 px-16 gap-16 laptop:items-center">
        <div className="flex flex-1 flex-col gap-4">
          <h3 className="font-bold">Got a project in mind?</h3>
          <p className="whitespace-pre-line">
            {`Use the form to give me as much detail as possible and I’ll get back to you as soon as I can.

              Alternatively, get in touch using the information below or contact me via social media.`}
          </p>
          <div className="flex phone:flex-col gap-4 font-semibold">
            <p className="text-accent">hello@robertfox.design</p>
            <p>{`(704) 555-0127`}</p>
          </div>
        </div>
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="flex flex-col flex-1 gap-4">
            <div className="grid laptop:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label>Your Name</label>
                <input required placeholder="John Smith" name="from_name" />
              </div>
              <div className="flex flex-col gap-1">
                <label>Your Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="johnsmith223@domain.com"
                  name="from_email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label>Project Details</label>
              <textarea
                required
                rows={7}
                className="whitespace-pre-line"
                name="message"
                placeholder={`Hello,

              I would like to create an eCommerce website for a clothing business. I want it to be responsive. Can you help?

              Thanks!`}
              />
            </div>
            <div className="grid grid-cols-2 phone:grid-cols-1 gap-4">
              <div className="flex flex-col gap-1">
                <label>Your Budget Range</label>
                <input
                  type="number"
                  required
                  name="budget"
                  placeholder="< $1000"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Your Timeline</label>
                <input
                  type="number"
                  required
                  name="timeline"
                  placeholder="3-4 months"
                />
              </div>
            </div>
            <button
              disabled={loading}
              className="bg-brand-gradient flex gap-2 justify-center items-center"
            >
              <p>Let’s do this</p>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.91504 27.95L7.91504 16.45L5.91504 4.95001L28 16C28.0832 16.0415 28.1532 16.1053 28.2022 16.1844C28.2511 16.2634 28.277 16.3545 28.277 16.4475C28.277 16.5405 28.2511 16.6316 28.2022 16.7107C28.1532 16.7897 28.0832 16.8535 28 16.895L5.91504 27.95Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M27.9 16.46H7.91504"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
