
import { useEffect, useState } from "react";
import NavbarToggle from "./components/NavbarToggle";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

export default function Ucapan() {
    const [isOpen, setIsOpen] = useState(false);

    const fadeDown = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const fadeRight = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <div className=" bg-neutral-900 bg-center bg-cover h-screen w-[100%] relative overflow-hidden">
            {[...Array(10)].map((_, i) => (
                <img
                    key={i}
                    src="image/ballon.png"
                    alt="balon"
                    className="absolute bottom-0 animate-balon z-50"
                    style={{
                        left: `${Math.random() * 90 + 5}%`, // posisi horizontal random (5%-95%)
                        animationDelay: `${Math.random() * 1.5}s`,      // delay biar gak bareng-bareng
                    }}
                />
            ))}

            <NavbarToggle isOpen={isOpen} setIsOpen={setIsOpen} />
            <Navbar isOpen={isOpen} />

            <div className=" h-[100%] w-full flex flex-col justify-between">
                <motion.div
                    variants={fadeDown}
                    initial="hidden"
                    animate="visible"
                    className="w-full h-[25%] bg-gradient-to-t from-pink-700 to-pink-500 relative flex justify-center items-center"
                >
                    <div className="absolute top-41 sm:top-42 md:top-42 w-full h-4 sm:h-5 md:h-5 bg-pink-800"></div>
                    <div className="absolute top-45 sm:top-47 md:top-47 w-full h-4 sm:h-5 md:h-5 bg-pink-900"></div>
                    <h1
                        className="text-2xl sm:text-3xl md:text-4xl text-neutral-100"
                        style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}
                    >
                        HBD Sayangg ❤️
                    </h1>
                </motion.div>

                <div className="text-amber-50 h-[70%] w-full sm:py-5 py-2 overflow-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="w-[92%] bg-neutral-800 p-4 md:w-[70%] m-auto sm:w-9/12 sm:p-5 rounded-2xl sm:shadow-lg sm:shadow-neutral-500 sm:bg-neutral-800"
                    >
                        {/* Gambar pertama di kanan */}
                        <motion.img
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            src="image/tes.jpeg"
                            alt="gambar"
                            className="float-right ml-4 mb-2 mr-4 w-28 h-28 object-cover rounded-full border-4 border-neutral-400"
                            style={{
                                shapeOutside: "circle()",
                                clipPath: "circle()",
                                shapeMargin: "8px",
                            }}
                        />

                        {/* Paragraf pertama */}
                        <p className="text-neutral-300 text-xs sm:text-sm md:text-base raleway text-justify leading-5 md:leading-6 mb-4">
                            <span className=" font-bold">Selamat ulang tahun sayangku ❤️</span> Hari ini adalah hari
                            yang spesial u karena di tanggal ini Allah menghadirkan
                            seseorang yang begitu berharga dalam hidupku, yaitu ipitt.
                            Awak bersyukur setiap hari bisa mengenal u, bisa sayang sama u.
                            Awak berharap di hari ulang tahun u ini u jadi pribadi yang lebih baik lagi,
                            semua keinginan nya tercapai, dijauhkan dari emosi negatif,
                            dijauhkan dari maksiat, dan dijauhkan dari hal-hal yang ga diinginkan, Amiiinn.
                        </p>

                        {/* Gambar kedua di kiri */}
                        <motion.img
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            src="image/tes2.jpeg"
                            alt="gambar kedua"
                            className="float-left mr-4 mb-2 w-28 h-28 object-cover rounded-lg border-4 border-neutral-400"
                            style={{
                                shapeOutside: "inset(0)",
                                clipPath: "inset(0)",
                                shapeMargin: "8px",
                            }}
                        />

                        {/* Paragraf kedua */}
                        <p className="text-neutral-300 text-xs sm:text-sm md:text-base raleway text-justify leading-5 md:leading-6">
                            Terima kasih sudah selalu ada untuk awak, mengerti awak dalam
                            keadaan apa pun, dan mau berjalan bersama di setiap langkah.
                            Awak sadar awak belum sempurna untuk u, dan ingin menjadi yang lebih baik kedepannya.
                            Mungkin hadiah ulang tahun awak ga seberapa awak minta maaff yaa,
                            hanya ini yang bisa awak kasihh, semoga u suka.
                            Doa awak, semoga semua impian u tercapai, panjang umur, sehat
                            selalu, dilimpahi kebahagiaan, dan dikelilingi cinta yang
                            tulus. Ingat ya, awak selalu ada di samping u, mendukung u,
                            dan mencintai u lebih dari yang bisa awak ucapkan. Happy
                            birthday, my love. You deserve all the happiness in the
                            world ✨💖.
                        </p>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}