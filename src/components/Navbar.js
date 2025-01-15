import { useRef } from "react";

function Navbar(props) {
  const { projectsRef, servicesRef, aboutRef, contactRef } = props;
  const navbar = useRef();

  const goTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - navbar.current.offsetHeight,
      behavior: "smooth",
    });
  };

  return (
    <nav
      ref={navbar}
      id="navbar"
      className="hidden md:flex flex-row justify-center h-16 px-6 py-2 fixed top-0 right-0 left-0 bg-primary z-50"
    >
      <button
        onClick={() => goTo(navbar)}
        className="hidden md:block m-2 text-2xl font-semibold text-white hover:underline underline-offset-2"
      >
        Gerry Yang
      </button>
      <div className="flex flex-row w-full justify-evenly items-center md:w-1/4 ml-auto text-white">
        <button
          className="hover:underline underline-offset-2 font-medium"
          onClick={() => goTo(aboutRef)}
        >
          About
        </button>
        <button
          className="hover:underline underline-offset-2 font-medium"
          onClick={() => goTo(servicesRef)}
        >
          Services
        </button>
        <button
          className="hover:underline underline-offset-2 font-medium"
          onClick={() => goTo(projectsRef)}
        >
          Projects
        </button>
        <button
          className="bg-white text-primary font-bold py-3 px-5 rounded-lg hover:bg-opacity-80"
          onClick={() => goTo(contactRef)}
        >
          Work With Me
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
