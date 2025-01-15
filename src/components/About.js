import frankMaher from "../assets/frank-maher-standing.jpg";
import frankMaherSquare from "../assets/frank-maher-standing-square.jpg";

function About() {
  return (
    <div className="flex flex-col justify-center items-center py-8 px-2 lg:flex-row md:my-16 md:max-w-[70%] md:gap-6 lg:max-w-[50%] md:ml-auto md:mr-auto">
      <img
        src={frankMaher}
        alt="Gerry Yang"
        className="hidden md:block rounded-full border border-lightgray shadow-lightgray shadow-lg object-cover h-72 w-72 m-6 lg:h-80 lg:w-80 xl:h-96 xl:w-96 transform transition ease-in-out hover:shadow-2xl hover:-translate-y-4"
      />
      <img
        src={frankMaherSquare}
        alt="Gerry Yang"
        className="block md:hidden rounded-full border border-lightgray shadow-lightgray shadow-lg object-cover h-72 w-72 m-6 lg:h-80 lg:w-80 xl:h-96 xl:w-96 transform transition ease-in-out hover:shadow-2xl hover:-translate-y-4"
      />
      <div className="flex flex-col justify-center">
        <h1 className="text-primary p-4">I'm Gerry Yang</h1>
        <p className="p-4">
          I create modern, engaging websites that help musicians and music schools attract students, showcase their programs, and thrive online.
        </p>
        <p className="p-4">
          As a{" "}
          <a
            className="text-primary font-bold underline-offset-4 underline hover:text-secondary hover:animate-jump inline-block"
            href="https://gerry004.github.io/gerry-yang-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            software engineer
          </a>
          , I co-founded Kreoh Education, where I built a full-stack web
          platform in just 6 weeks, used by over 100 students at UCD and the
          University of Limerick. I also worked at Noloco (YCS21) for 6 months,
          contributing numerous sought-after features that enhanced their
          no-code platform.
        </p>
        <p className="p-4">
          As a{" "}
          <a className="text-primary font-bold underline-offset-4 underline hover:text-secondary hover:animate-jump inline-block"
            href="https://gerry004.github.io/gerry-yang-pianist/"
            target="_blank"
            rel="noopener noreferrer"
          >
            pianist
          </a>
          , I was awarded first prize at the Giovani Musicisti International
          Piano Competition, I made my Carnegie Hall debut in 2017, and I was 1
          of 6 finalists at the €5,000 Frank Maher Musical Awards.
        </p>
      </div>
    </div>
  );
}

export default About;
