import { GalleryVerticalEnd, Gift, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ isOpen }) {
    return (
        <div className={` absolute top-0 left-0 transition-opacity duration-300 z-50 overflow-hidden ${isOpen? "h-[100%] w-[100%] opacity-100" : "h-0 w-0 opacity-0"}`}>
            <div className="bg-neutral-800 opacity-60 h-full w-full">
            </div>
            <nav className={`h-full bg-pink-50 absolute top-0 left-0 transition-all duration-300 overflow-hidden ${isOpen ? "w-3/4 md:w-2/8" : "w-0"}`}>
                <div className=" w-full h-1/9 flex items-center justify-end relative" style={{backgroundColor: "#BE185D"}}>
                    <div className=" w-full h-2.5 bg-gradient-to-r from-pink-200 via-pink-400 to-pink-600 absolute top-17"></div>
                    <div className=" w-full h-2.5 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-400 absolute top-[78px]"></div>
                </div>
                <div className=" p-3 pt-15 text-neutral-600 w-full flex flex-col gap-1.5 raleway text-sm sm:text-base md:text-base">
                    <Link to={"/"} className=" w-full py-1.5 px-3 box-border rounded-md border-2 hover:border-pink-300 border-pink-200 active:bg-pink-200 bg-pink-100 flex items-center"><Play size={16} className=" mr-3" /> Bermain</Link>
                    <Link to={"/kartu_ucapan_for_ipit"} className=" w-full py-1.5 px-3 box-border rounded-md border-2 hover:border-pink-300 border-pink-200 active:bg-pink-200 bg-pink-100 flex items-center"><Gift size={16} className=" mr-3" /> Kartu ucapan</Link>
                    <Link to={"/galeri_kenangan"} className=" w-full py-1.5 px-3 box-border rounded-md border-2 hover:border-pink-300 border-pink-200 active:bg-pink-200 bg-pink-100 flex items-center"><GalleryVerticalEnd size={16} className=" mr-3" /> Galeri Kenangan</Link>
                </div>
            </nav>
        </div>
    );
}