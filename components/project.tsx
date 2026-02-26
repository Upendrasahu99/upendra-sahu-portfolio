import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const porjectList = [
  {
    title: "Project Name",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, veniam.",
    image: "https://avatar.vercel.sh/shadcn1",
    link: "#",
    isLive: false
  },
  {
    title: "Project Name",
    description: "Project Description",
    image: "https://avatar.vercel.sh/shadcn1",
    link: "#",
    isLive: false
  },
  {
    title: "Project Name",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    image: "https://avatar.vercel.sh/shadcn1",
    link: "#",
    isLive: true
  },
  {
    title: "Project Name",
    description: "Project Description",
    image: "https://avatar.vercel.sh/shadcn1",
    link: "#",
     isLive: true
  },
];


const Project = () => {
    return <div>
      <hr className="my-2"/>
        <h3 className="font-bold">Projects</h3>
      <hr className="my-2"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15">{porjectList.map((project) => (
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src={project.image}
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary" className={`${project.isLive ? 'bg-transparent text-green-700 dark:text-green-300' : 'bg-transparent text-red-700 dark:text-red-300'}`}>{project.isLive ? 'Live': 'In Progress'}</Badge>
          </CardAction>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription className="h-12">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="p-0">
          <Button variant='ghost' className="w-full cursor-pointer">View Details</Button>
        </CardFooter>
      </Card>
      ))}
      </div>
      <div className="flex py-10">
        <Button className="px-10 cursor-pointer border-black border-double border-4">View All</Button>
      </div>
    </div>
}

export default Project