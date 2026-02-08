"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu"

import Header from "./components/header";
import Seperator from "./components/separator";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  

  return (
  <div className="p-4">
  <Header></Header>
  <Seperator></Seperator>
  <About></About> 
  <Seperator></Seperator>
  <Projects></Projects> 
  <Seperator></Seperator>
  <Contact></Contact>
  </div> 
  );
}
