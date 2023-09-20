import Aside from "../components/Aside";
import Project from "../components/Projects";
import TextSection from "../components/TextSection";
import { projects } from "../db/GithubProjects";

const Home = () => {
  let aboutMe =
    "My name is João Victor and I am a 20-year-old software engineer. In my free time, I enjoy playing Valorant and working on personal project. I am excited to share my skills and experience with others in the field.";

  let myProjects =
    "I'm a dedicated Java backend developer with a passion for tackling real-life problems with code. I find immense satisfaction in using Java to create solutions that address the everyday challenges faced by people. Turning complex issues into elegant, functional software is my calling, and I love every minute of it. ";

  return (
    <main className="flex flex-col sm:flex-row gap-8 p-6">
      <Aside />
      <div className="flex flex-col gap-14">
        <TextSection
          title={"Hi, I'm João Victor! 👋"}
          text={aboutMe}
          size="text-xl"
        />
        <TextSection
          title={"My projects 🧪"}
          text={myProjects}
          size="text-lg"
        />
        <ul className="flex flex-col gap-6">
          {projects.map((project) => (
            <Project
              key={project.id}
              repository={project.name}
              description={project.description}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
