import { BadgeQuestionMark, ConciergeBell, X } from "lucide-react";

export default function CaraBermain({ isOpen2, setIsOpen2 }) {
    return (
        <div className={` flex justify-center items-center absolute m-auto transition-opacity duration-300 z-80 overflow-hidden ${isOpen2 ? "h-[100%] w-[100%] opacity-100" : "h-0 w-0 opacity-0"}`}>
            <div className="bg-neutral-800 opacity-80 h-full w-full">
            </div>
            <div className={` flex justify-center items-center absolute bg-neutral-100 transition-all duration-400 rounded-2xl ${isOpen2 ? "opacity-100 h-1/2 w-4/5 sm:w-2/3 md:w-2/6" : "opacity-0 h-0 w-0"}`}>
                <div onClick={() => setIsOpen2(!isOpen2)} className=" h-13 w-13 md:h-15 md:w-15 bg-neutral-100 rounded-full absolute top-[105%] flex justify-center items-center cursor-pointer">
                    <X size={30} className=" text-pink-800"/>
                </div>
                <div className=" h-[97%] w-[97%] border-2 border-pink-800 rounded-xl p-3 md:p-5 raleway">
                    <h2 className=" font-bold text-pink-800 text-center mb-2.5 md:text-lg">Petunjuk Bermain 🤖</h2>
                    <span className=" text-pink-800 raleway text-[13px] md:text-sm flex flex-wrap items-center">
                        <p className=" mr-3 font-medium">1.</p>
                        <p className=" font-medium mr-1">Tuliskan Permintaan</p><ConciergeBell size={13}/>
                        <p className=" w-full ml-5">Rumus untuk menuliskan permintaan adalah dengan menulis: <code className=" font-medium">Albi, silahkan jawab pertanyaan ini</code> atau hanya: <code className=" font-medium">Albi, silahkan jawab</code></p>
                    </span>
                    <span className=" text-pink-800 raleway text-[13px] md:text-sm flex flex-wrap items-center mt-1.5">
                        <p className=" mr-3 font-medium">2.</p>
                        <p className=" font-medium mr-1">Cara Bertanya</p><BadgeQuestionMark size={13}/>
                        <p className=" w-full ml-5">
                            Mohon gunakan kata-kata yang positif dan ramah. Jika pertanyaan sudah siap, tekan tombol <code>Kirim</code> send. Tunggu beberapa saat, lalu lihat jawabannya.
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
}