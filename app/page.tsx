import { Profile } from "@/components/profile";
import Project from "@/components/project";
import Blog from "@/components/blog";
import Contact from "@/components/contact";

export default function Page() {
  return <div className="flex flex-col gap-6">
    <Profile />
    <Project />
    <Blog />
    <Contact />
  </div>;
}