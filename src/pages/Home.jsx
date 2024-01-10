import Aside from "../components/Aside";
import Project from "../components/Projects";
import Skills from "../components/Skills";
import TextSection from "../components/TextSection";
import { projects } from "../db/GithubProjects";

const Home = () => {
  let aboutMe =
    "My name is João Victor and I am a 20-year-old software engineer. In my free time, I enjoy playing Valorant and working on personal projects. I am excited to share my skills and experience with others in the field.";

  let myProjects =
    "I'm a dedicated Java backend developer with a passion for solve real-life problems with code. I find immense satisfaction in using Java to create solutions that address the everyday challenges faced by people. But when no one is watching, I like to create front-end projetcs, like this one 😎";

  return (
    <main className="flex flex-col sm:flex-row gap-8 p-6">
      <Aside />
      <div className="flex flex-col gap-14">
        <TextSection
          title="Hi, I'm João Victor! 👋"
          text={aboutMe}
          size="text-xl"
        />
        <TextSection 
          title="Main Skills 🐱‍👤"
          text={<Skills />}
          size="text-xl"
          />
        <TextSection
          title="Main Projects 🧪"
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
          <p>You can see more projects in my <a href="https://github.com/joaovictornovais" className="underline" target="__blank">GitHub</a>!</p>
        </ul>
      </div>
    </main>
  );
};

export default Home;
