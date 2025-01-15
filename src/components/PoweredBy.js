import Card from "./Card";
import POWERED_BY from "../content/poweredBy";

function PoweredBy() {
  return (
    <div className="flex flex-col justify-center items-center py-16 md:py-18 px-5">
      <h1 className="text-primary py-4 md:py-12">Powered By</h1>
      <div className="md:grid md:grid-cols-3 md:gap-4 md:justify-between lg:max-w-[70%] md:max-w-[80%]">
        {POWERED_BY.map(
          ({ title, image, link, description, dates, points, skills }) => (
            <Card
              image={image}
              link={link}
              title={title}
              dates={dates}
              description={description}
              points={points}
              skills={skills}
            />
          )
        )}
      </div>
    </div>
  );
}
export default PoweredBy;
