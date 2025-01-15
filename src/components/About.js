import headshot from "../assets/fw-headshot-1.JPG";

function About() {
  return (
    <div className="flex flex-col justify-center items-center py-8 px-2 lg:flex-row md:my-16 md:max-w-[70%] lg:max-w-[50%] md:ml-auto md:mr-auto">
      <img
        src={headshot}
        alt="Gerry Yang"
        className="rounded-full border border-lightgray shadow-lightgray shadow-lg object-cover h-72 w-72 m-6 lg:h-80 lg:w-80 xl:h-96 xl:w-96 transform
        transition ease-in-out hover:shadow-2xl hover:-translate-y-4"
      />
      <div className="flex flex-col justify-center">
        <h1 className="text-primary p-4">I'm Gerry Yang</h1>
        <p className="p-4">
          As a software engineer (link), I co-founded Kreoh Education, where I built a full-stack web platform in just 6 weeks, used by over 100 students at UCD and the University of Limerick. I also worked at Noloco (YCS21) for 6 months, contributing numerous sought-after features that enhanced their no-code platform.
        </p>
        <p className="p-4">
        As a pianist (link), I was awarded first prize at the Giovani Musicisti International Piano Competition, I made my Carnegie Hall debut in 2017, and I was 1 of 6 finalists at the €5,000 Frank Maher Musical Awards.
        </p>
        <a
          href="https://calendly.com/gerryyang/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="bg-primary text-white text-xl font-bold py-3 px-5 rounded-lg hover:bg-opacity-80 m-4
        shadow-lightgray shadow-md hover:shadow-lightgray hover:shadow-lg hover:-translate-y-1"
          >
            Let's Chat!
          </button>
        </a>
      </div>
    </div>
  );
}
export default About;
