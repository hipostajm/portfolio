"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu"

import Header from "./components/header/header";
import Seperator from "./components/separator/separator";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Project from "./models/project";
import Footer from "./components/footer/footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient()

export default function Home(){
  return(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <App></App>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

function App() {
  
  const projects: Project[] = [
    {name: "ybet", desc: 'Ybet is a project of end-2-end encrypted chat that me with my friends are doing.', link: "https://github.com/te-hee/ybet-backend", imgName: undefined},
    {name: "Portfolio", desc: 'Mine portfolio on which u are right now :D', link: "https://github.com/hipostajm/portfolio", imgName: undefined},
    {name: "Led display", desc: 'A way to make use of HUB75 based led displays with abilty to send animations and static images for raspberry pi', link: "https://github.com/hipostajm/led-display"},
    {name: "Short/Long polling", desc: 'Implementation of short and long polling in golang', link: "https://github.com/hipostajm/po-async-http-task"}
  ]

  return (
  <div className="p-4">
  <Header></Header>
  <Seperator></Seperator>
  <About></About> 
  <Seperator></Seperator>
  <Projects projects={projects}></Projects> 
  <Seperator></Seperator>
  <Contact></Contact>
  <Seperator></Seperator>
  <Footer></Footer>
  </div> 
  );
}
