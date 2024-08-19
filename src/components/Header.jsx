import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

function Header() {

    const[menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <header className="fixed w-full bg-[#fff] text-[#10002B] font-semibold text-md py-2 pb-2">
            <nav class="flex justify-between max-w-6xl mx-auto items-center p-2">
                <a className="text-2xl text-[#7B2CBF]">João V.</a>
                <ul class="hidden md:inline">
                    <li class="flex gap-8 items-center">
                        <a href="#" className="header-item">Home</a>
                        <a href="#" className="header-item">About me</a>
                        <a href="#" className="header-item">Experiences</a>
                        <a href="#" className="header-item">Projects</a>
                        <a href="#" className="header-item">Skills</a>
                        <button className="bg-[#10002B] text-[#fff] px-4 py-2 rounded-md hover:bg-[#240046] transition-all duration-200">Contact me</button>
                    </li>
                </ul>
                <div onClick={() => handleMenu()} className="inline md:hidden">
                    { menu ? <MdClose size={25}/> : <FiMenu size={25}/>}
                </div>
            </nav>
            <div className={menu ? "flex flex-col gap-2 md:hidden bg-gray-100 p-8" : "hidden"}>
                <div className="flex flex-col">
                    <ul className={menu ? "inline" : "hidden"}>
                    <li class="flex flex-col gap-4 items-center">
                        <a href="#" className="header-item">About me</a>
                        <a href="#" className="header-item">Home</a>
                        <a href="#" className="header-item">Experiences</a>
                        <a href="#" className="header-item">Projects</a>
                        <a href="#" className="header-item">Skills</a>
                        <button className="bg-[#10002B] text-[#fff] px-4 py-2 rounded-md hover:bg-[#240046] transition-all duration-200">Contact me</button>
                    </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;