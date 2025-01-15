import PROJECTS from "../content/projects";
import Card from "./Card";

function Projects() {
  return (
    <div className="bg-primary flex flex-col justify-center items-center py-16 md:py-18 px-5">
      <h1 className="text-white py-4 md:py-12">Projects</h1>
      <div className="md:grid md:grid-cols-1 md:gap-4 md:justify-between lg:max-w-[60%] md:max-w-[80%]">
        {PROJECTS.map(({ title, image, link, description, points, skills }) => (
          <Card
            image={image}
            link={link}
            title={title}
            description={description}
            points={points}
            skills={skills}
            inverseColors={true}
          />
        ))}
      </div>
      <h2 className="mt-6 text-white">
        More projects coming soon...
      </h2>
    </div>
  );
}

export default Projects;
