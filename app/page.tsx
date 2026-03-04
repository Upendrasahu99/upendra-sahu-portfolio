import { Profile } from "@/components/profile";
import Skills from "@/components/skills";
import Project from "@/components/project";
import Blog from "@/components/blog";
import Contact from "@/components/contact";

export default function Page() {
  return <div className="flex flex-col gap-6">
    <Profile />
    <Skills />
    <Project />
    <Blog />
    <Contact />
  </div>;
}