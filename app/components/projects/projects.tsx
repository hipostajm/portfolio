import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Project from "@/app/models/project"
import "./projects.scss"

interface projectsProps{
  projects: Project[];
}

export default function Projects({projects}: projectsProps){
  return(
<Carousel className="w-300 h-auto min-h-128 m-16 ml-auto mr-auto">
  <CarouselContent className="h-full *:h-full">
    {projects.map((project, index) => (
      <CarouselItem key={index} className="basis-1/3 h-full overflow-y-auto">
        <div className="bg-gray-100 m-2.5 h-full hover:scale-105 transition-transform">
          <a href={project.link} className="h-full">
            <h1 className="text-[2rem] text-center">{project.name}</h1>
            {project.imgName ?  <img src={project.imgName} alt={project.name}/> : null}
            <h2 className="m-2.5">&emsp;{project.desc}</h2>
          </a>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
  )
} 
