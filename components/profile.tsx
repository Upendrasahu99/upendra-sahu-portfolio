import { Button } from "./ui/button";
import { RiGithubFill } from "@remixicon/react";

export const Profile = () => {
    return <div>
      <h3 className="text-3xl font-bold">Upendra Sahu</h3>
      <h6 className=" text-gray-400">Full Stack Developer</h6>
      <hr className="my-2"/>
      <p className="text-gray-600">
        Hi, I'm Upendra — a software developer who turns ideas into working tech solutions. I focus on building minimal, functional apps that are easy for users to actually use. I'm always open to new opportunities to work, learn, and grow.
      </p>
      <div>
        <Button><RiGithubFill /></Button>
      </div>
    </div>
}
