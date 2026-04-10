import { FaLongArrowAltRight } from "react-icons/fa";
import ProjectCard from "./cards/ProjectCard";
import { projects } from "@/db/projects";

const Explore = () => {
  return (
    <div className="max-w-350 mx-auto mt-20 overflow-x-hidden" id="explore">
      <div className="flex max-lg:flex-col max-lg:px-10 justify-between  mb-10">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Explore New Projects</h1>
          <p className="text-sm text-black/50">
            Discover Exceptional Homes, Just Listed and Ready for You
          </p>
        </div>
        <div>
          <div className="inline-flex px-4 py-2 items-center border gap-2 mt-4 border-black rounded-sm ">
            <FaLongArrowAltRight />
            <p className="font-semibold">View All New Projects</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-lg:p-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={index >= 2 ? "hidden sm:block" : "block"}
          >
            <ProjectCard
              key={project.id}
              images={project.images}
              title={project.title}
              location={project.location}
              beds={project.beds}
              baths={project.baths}
              parking={project.parking}
              carpetarea={project.carpetarea}
              builtuparea={project.builtuparea}
              superarea={project.superarea}
              price={project.price}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center text-white">
        <div className="border border-[#FF5858] text-[#FF5858] rounded-sm px-20 max-lg:px-10 py-3 mt-20 mb-20 hover:bg-[#FF5858] hover:text-white cursor-pointer duration-300">
          <p>Load More</p>
        </div>
      </div>
    </div>
  );
};
export default Explore;
