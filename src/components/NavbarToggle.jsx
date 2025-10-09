import { Menu, X } from "lucide-react";

export default function NavbarToggle({ isOpen, setIsOpen }) {

    return (
        <div
            className="absolute top-5 left-5 cursor-pointer z-60"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="relative w-[30px] h-[30px]">
                <Menu
                    size={30}
                    className={`absolute top-0 left-0 text-neutral-100 transform transition-all duration-500 ${isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                        }`}
                />
                <X
                    size={30}
                    className={`absolute top-0 left-0 text-neutral-100 transform transition-all duration-500 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                        }`}
                />
            </div>
        </div>
    );
}
