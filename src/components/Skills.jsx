const Skills = () => {
  const stacks = [
    {
      id: 1,
      name: "Java",
      image:
        "https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png",
    },
    {
      id: 2,
      name: "Spring",
      image:
        "https://user-images.githubusercontent.com/25181517/117201470-f6d56780-adec-11eb-8f7c-e70e376cfd07.png",
    },
    {
      id: 3,
      name: "JavaScript",
      image:
        "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
    },
    {
      id: 4,
      name: "React.js",
      image:
        "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
    },
    {
      id: 5,
      name: "Python",
      image:
        "https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png",
    },
  ];

  return (
    <ul className="grid grid-cols-5 gap-6">
      {stacks.map((stack) => (
        <li
          key={stack.id}
          className="flex flex-col gap-3 items-center group cursor-pointer"
        >
          <img
            src={stack.image}
            alt={stack.name}
            className="w-16 group-hover:scale-110 transition-all"
          />
          <p className="text-xs text-zinc-400 group-hover:text-zinc-900 transition-colors group-hover:font-semibold">
            {stack.name}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Skills;
