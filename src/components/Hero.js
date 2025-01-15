import headshot from "../assets/fw-headshot-1.JPG";

function Hero(props) {
  const { contactRef } = props;
  const goTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center text-center py-8 px-2 min-h-[100vh] lg:flex-row md:mt-16 md:max-w-[70%] lg:max-w-[50%] md:ml-auto md:mr-auto md:min-h-[94vh]">
      <img
        src={headshot}
        alt="Gerry Yang"
        className="rounded-full border border-lightgray shadow-lightgray shadow-lg object-cover h-72 w-72 m-6 lg:h-80 lg:w-80 xl:h-96 xl:w-96 transform
        transition ease-in-out hover:shadow-2xl hover:-translate-y-4"
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-primary">Web Designer and Developer</h1>
        <p className="p-4">
          Creating modern, engaging websites that help musicians and music
          schools attract students, showcase their programs, and thrive online.
        </p>
        <button
          className="bg-primary text-white text-xl font-bold py-3 px-5 rounded-lg hover:bg-opacity-80 my-4
        shadow-lightgray shadow-md hover:shadow-lightgray hover:shadow-lg hover:-translate-y-1"
          onClick={() => goTo(contactRef)}
        >
          Work With Me
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-primary py-1 w-10 h-10 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </div>
  );
}
export default Hero;
