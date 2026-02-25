import { Button } from "./ui/button";
import { RiGithubFill, RiLinkedinFill, RiMailFill, RiMediumFill, RiMoreFill, RiTwitterXFill, RiYoutubeFill } from "@remixicon/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export const Profile = () => {
    return <div>
      <hr className="my-2"/>
      <h3 className="text-2xl font-bold">Upendra Sahu</h3>
      <h6 className=" text-gray-400 text-sm">Full Stack Developer</h6>
      <hr className="my-2"/>
      <p className="text-gray-600 text-sm">
        Hi, I'm Upendra — a software developer who turns ideas into working tech solutions. I focus on building minimal, functional apps that are easy for users to actually use. I'm always open to new opportunities to work, learn, and grow.
      </p>
      <div className="flex gap-2 mt-2 flex-wrap">
        <Button variant="secondary" className="cursor-pointer"><RiGithubFill />github</Button>
        <Button variant="secondary" className="cursor-pointer"><RiLinkedinFill />linkedin</Button>
        <Button variant="secondary" className="cursor-pointer"><RiTwitterXFill />twitter</Button>
        <Button variant="secondary" className="cursor-pointer"><RiMediumFill />medium</Button>
        <Button variant="secondary" className="cursor-pointer"><RiYoutubeFill />youtube</Button>
      </div>
    </div>
}
