import { Profile } from "@/components/profile";
import Project from "@/components/project";

export default function Page() {
return <div className="flex flex-col gap-6">
  <Profile />
  <Project/>
</div>;
}