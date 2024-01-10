const Skills = () => {
  return (
    <ul className="grid grid-cols-5 gap-6">

        <li className="flex flex-col items-center space-y-2">
            <img src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png" width={60} alt="Java" />
            <p className="text-xs text-zinc-400">Java</p>
        </li>
        <li className="flex flex-col items-center space-y-2">
            <img src="https://user-images.githubusercontent.com/25181517/117201470-f6d56780-adec-11eb-8f7c-e70e376cfd07.png" width={60} alt="Spring" />
            <p className="text-xs text-zinc-400">Spring</p>
        </li>
        <li className="flex flex-col items-center space-y-2">
            <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" width={60} alt="JavaScript" />
            <p className="text-xs text-zinc-400">JavaScript</p>
        </li>
        <li className="flex flex-col items-center space-y-2">
            <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" width={60} alt="React.js" />
            <p className="text-xs text-zinc-400">React.js</p>
        </li>
        <li className="flex flex-col items-center space-y-2">
            <img src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" width={60} alt="Python" />
            <p className="text-xs text-zinc-400">Python</p>
        </li>
    </ul>
  )
}

export default Skills