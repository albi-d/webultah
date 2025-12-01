import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import NavbarToggle from "./components/NavbarToggle";
import Navbar from "./components/Navbar";

export default function Kenangan() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSmallNav, setShowSmallNav] = useState(false);

    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        const handleScroll = () => {
            if (scrollContainer.scrollTop > 250) {
                setShowSmallNav(true);
            } else {
                setShowSmallNav(false);
            }
        };

        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);


    return (
        <div className="bg-neutral-900 text-white h-screen w-full overflow-x-hidden relative flex flex-col">
            {/* Navbar kecil saat discroll */}
            <div
                className={`absolute top-0 left-0 w-full bg-gradient-to-r from-pink-700 to-pink-500 backdrop-blur-md shadow-md transition-all duration-500 ${showSmallNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    } z-50`}
            >
                <div className="w-full h-18 flex items-center justify-center px-6 py-3">
                    <h1
                        className="text-xl font-semibold text-pink-50"
                        style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}
                    >
                        Kenangan
                    </h1>
                </div>
            </div>

            <NavbarToggle isOpen={isOpen} setIsOpen={setIsOpen} />
            <Navbar isOpen={isOpen} />

            {/* Kontainer scroll utama */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto scroll-smooth">
                {/* HEADER */}
                <header className="h-[260px] flex flex-col justify-center items-center bg-gradient-to-b from-pink-700 to-pink-500 text-center shadow-lg">
                    <h1
                        className="text-2xl sm:text-3xl md:text-6xl font-bold mb-3"
                        style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}
                    >
                        Kenangan Indah
                    </h1>
                    <p className="text-xs sm:text-base md:text-xl opacity-90 raleway">
                        Setiap momen punya cerita yang tak terlupakan ✨
                    </p>
                </header>

                {/* GALERI */}
                <main className="max-w-5xl mx-auto p-6 flex flex-col gap-10">
                    <section>
                        <h1 className=" text-xl mb-1.5 text-center">2022</h1>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[...Array(10)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="relative w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.5rem)] md:w-[calc(25%-0.5rem)] aspect-square overflow-hidden rounded-2xl shadow-lg group"
                                >
                                    <img
                                        src={`image/foto22.${i + 1}.jpeg`}
                                        alt={`Foto ${i + 1}`}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm raleway font-medium transition-opacity duration-300">
                                        Klik untuk buka
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h1 className=" text-xl mb-1.5 text-center">2023</h1>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[...Array(10)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="relative w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.5rem)] md:w-[calc(25%-0.5rem)] aspect-square overflow-hidden rounded-2xl shadow-lg group"
                                >
                                    <img
                                        src={`image/foto23.${i + 1}.jpeg`}
                                        alt={`Foto ${i + 1}`}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm raleway font-medium transition-opacity duration-300">
                                        Klik untuk buka
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h1 className=" text-xl mb-1.5 text-center">2024</h1>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="relative w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.5rem)] md:w-[calc(25%-0.5rem)] aspect-square overflow-hidden rounded-2xl shadow-lg group"
                                >
                                    <img
                                        src={`image/24.${i + 1}.jpeg`}
                                        alt={`Foto ${i + 1}`}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm raleway font-medium transition-opacity duration-300">
                                        Klik untuk buka
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h1 className=" text-xl mb-1.5 text-center">2025</h1>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="relative w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.5rem)] md:w-[calc(25%-0.5rem)] aspect-square overflow-hidden rounded-2xl shadow-lg group"
                                >
                                    <img
                                        src={`image/foto25.${i + 1}.jpeg`}
                                        alt={`Foto ${i + 1}`}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm raleway font-medium transition-opacity duration-300">
                                        Klik untuk buka
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </main>

            </div>
        </div>
    );
}
