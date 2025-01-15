import SERVICES from "../content/services";
import Card from "./Card";

function Services() {
  return (
    <div className="bg-primary flex flex-col justify-center items-center py-20 px-5">
      <h1 className="text-white py-4 mb-2">Services</h1>
      <div className="md:grid md:grid-cols-3 md:gap-4 md:justify-between lg:max-w-[70%] md:max-w-[80%]">
        {SERVICES.map(
          ({ title, icon, description }) => (
            <Card
              title={title}
              icon={icon}
              description={description}
              center={true}
              inverseColors={true}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Services;
