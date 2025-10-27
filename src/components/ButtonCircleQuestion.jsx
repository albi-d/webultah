import { CircleQuestionMark } from "lucide-react";

export default function ButtonCircleQuestion({ isOpen2, setIsOpen2 }) {
    return (
        <div onClick={() => setIsOpen2(!isOpen2)} data-aos="fade-left" className=" h-13 w-13 bg-pink-700 rounded-full absolute bottom-[10vh] right-[10vw] sm:right-12 md:right-14 flex items-center justify-center cursor-pointer active:bg-pink-800">
            <CircleQuestionMark size={30} className="text-neutral-100" />
        </div>
    );
}