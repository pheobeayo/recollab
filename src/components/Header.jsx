import { useState } from "react";
import logo from "../assets/logo.svg";
import { Sling as Hamburger } from "hamburger-react";

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="py-8 bg-[#123962]">
            <div className="w-[90%] mx-auto lg:flex md:flex justify-between hidden">
                <img src={logo} alt="" className="w-[235px] h-[43px]" />
                <w3m-button />
            </div>
            <div className="w-[95%] mx-auto flex justify-between lg:hidden md:hidden relative">
                <img src={logo} alt="" className="w-[185px] h-[43px]" />
                <Hamburger toggled={isOpen} toggle={setOpen} color="#427142" direction="right" />
                {isOpen && (<nav className="flex flex-col bg-[#123962] p-8 py-12 h-[100vh] w-[100%] absolute top-20 left-0 bg-baseBlack/70 z-50">

                    <div className="mt-6">
                      <w3m-button />
                    </div>
                </nav>)}
            </div>
        </header>
    );
};

export default Header;
