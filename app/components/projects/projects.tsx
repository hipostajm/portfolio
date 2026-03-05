import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Project from "@/app/models/project"
import "./projects.scss"
import { Tooltip,TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface projectsProps{
  projects: Project[];
}

export default function Projects({projects}: projectsProps){
  return(
<Carousel className="container w-[80%] md:h-100 h-140 m-16 ml-auto mr-auto ">
  <CarouselContent className="h-full *:h-full flex flex-row pr-8 pl-8">
    {projects.map((project, index) => (
      <CarouselItem key={index} className="xl:basis-1/3 md:basis-1/2 min-h-full overflow-y-hidden overflow-x-hidden p-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="border-2 border-black border-solid box-border h-full hover:md:scale-105 md:transition-transform">
          <a href={project.link} className="h-full">
            <h1 className="text-[2rem] text-center">{project.name}</h1>
            {project.imgName && <img src={project.imgName} alt={project.name}/>}
            <h2 className="m-2.5">&emsp;{project.desc}</h2>
          </a>
        </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{project.link}</p>
        </TooltipContent>
      </Tooltip>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious className="md:flex hidden"/>
  <CarouselNext className="md:flex hidden"/>
</Carousel>
  )
} 
