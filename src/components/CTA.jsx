export default function CTA() {
  return (
    <div className="flex flex-col gap-16 phone:px-8 tablet:px-16 px-32">
      <div className="flex flex-col gap-4 w-full laptop:w-1/2">
        <h4 className="font-semibold">
          I’m currently available for freelance work.
        </h4>
        <p>
          If you’re looking for a designer and developer that likes to get stuff
          done, let’s talk.
        </p>
        <div className="flex phone:flex-col gap-4 font-semibold">
          <p className="text-accent">hello@robertfox.design</p>
          <p>{`(704) 555-0127`}</p>
        </div>
      </div>
      <button className="bg-brand-gradient m-auto ml-0 phone:w-full">
        <p>Got a project in mind? Let’s talk!</p>
      </button>
    </div>
  );
}
