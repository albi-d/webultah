import { useState } from "react";
import { motion } from "framer-motion";
import wave from "./assets/wave.svg";
import { ConciergeBell, BadgeQuestionMark, SendHorizonal } from "lucide-react";
import ButtonCircleQuestion from "./components/ButtonCircleQuestion";
import NavbarToggle from "./components/NavbarToggle";
import Navbar from "./components/Navbar";
import CaraBermain from "./components/CaraBermain";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const petitionTemplate = "Albi, silahkan jawab pertanyaan ini:";
  const [petition, setPetition] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [secretAnswer, setSecretAnswer] = useState("");
  const [secretMode, setSecretMode] = useState(false);
  const [templateIndex, setTemplateIndex] = useState(0);

  const handlePetitionInput = (e) => {
    const value = e.target.value;
    const lastChar = value.slice(-1);

    if (lastChar === ".") {
      if (!secretMode) {
        // TITIK PERTAMA → masuk mode rahasia
        e.target.value = ""; // kosongkan input supaya rahasia
        setPetition("");
        setSecretMode(true);
        setSecretAnswer("");
        setTemplateIndex(0);
      } else {
        // TITIK KEDUA → keluar dari mode rahasia
        setSecretMode(false);
        // tampilkan kembali template yang terakhir ditulis
        setPetition(petitionTemplate.substring(0, templateIndex));
      }
    } else if (secretMode) {
      // selama mode rahasia aktif
      setSecretAnswer((prev) => prev + lastChar);
      if (templateIndex < petitionTemplate.length) {
        setPetition((prev) => prev + petitionTemplate[templateIndex]);
        setTemplateIndex((prev) => prev + 1);
      }
    } else {
      // mode normal
      setPetition(value);
    }
  };


  const askPeter = (e) => {
    e.preventDefault();
    if (secretAnswer !== "") {
      setAnswer(secretAnswer);
    } else if (petition !== "") {
      setAnswer("Permintaan nya salah ya sayangg.");
    } else {
      setAnswer("Isi dulu dong sayangg.");
    }

    setSecretAnswer("");
    setSecretMode(false);
    setTemplateIndex(0);
    setPetition("");
    setQuestion("");
  };

  return (
    <div className="min-h-screen min-w-screen h-screen w-screen text-neutral-100 flex flex-col items-center justify-center relative overflow-hidden bg-neutral-800">
      <ButtonCircleQuestion isOpen2={isOpen2} setIsOpen2={setIsOpen2} />
      <CaraBermain isOpen2={isOpen2} setIsOpen2={setIsOpen2} />
      <Navbar isOpen={isOpen} />

      {/* HEADER */}
      <motion.div
        className="h-2/6 w-full flex flex-col items-center justify-center box-border relative"
        style={{ backgroundColor: "#BE185D" }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <NavbarToggle isOpen={isOpen} setIsOpen={setIsOpen} />

        <motion.h1
          className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl text-neutral-100 overflow-hidden w-full"
          style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src="./catbutt.svg"
            alt="Logo CatButt"
            className="size-10 sm:size-12 md:size-15 mr-2"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />

          <motion.span
            className="text-pink-950 mr-1.5"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Albi
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Menjawab
          </motion.span>
        </motion.h1>

        <motion.div
          key={answer}
          className="mt-6 text-sm sm:text-xl md:text-2xl text-center raleway"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {answer}
        </motion.div>

        <motion.img
          src={wave}
          alt=""
          className="absolute top-50 block md:hidden sm:hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        <div className="absolute top-49 hidden md:block sm:block w-full h-5 bg-pink-800"></div>
        <div className="absolute top-54 hidden md:block sm:block w-full h-5 bg-pink-900"></div>
      </motion.div>

      {/* FORM */}
      <form
        className="h-3/4 w-full bg-neutral-800 flex flex-col items-center justify-start pt-25"
        onSubmit={askPeter}
      >
        <p className="text-neutral-400 text-sm mb-2 ml-[-10px] sm:mr-49 font-light">
          *Albi, silahkan jawab pertanyaan ini
        </p>

        <motion.div
          className="flex items-center w-4/5 max-w-lg p-3 mb-4 rounded-md bg-neutral-800 border border-neutral-700 focus-within:ring-2 focus-within:ring-pink-700"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ConciergeBell className="w-5 h-5 text-neutral-400 absolute" />
          <input
            type="text"
            value={petition}
            onInput={handlePetitionInput}
            placeholder="Ketik permintaan..."
            className="flex-1 bg-transparent focus:outline-none text-base sm:text-lg md:text-lg pl-8 z-10"
          />
        </motion.div>

        <motion.div
          className="flex items-center w-4/5 max-w-lg p-3 mb-4 rounded-md bg-neutral-800 border border-neutral-700 focus-within:ring-2 focus-within:ring-pink-700"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <BadgeQuestionMark className="w-5 h-5 text-neutral-400 absolute" />
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ketik pertanyaan..."
            className="flex-1 bg-transparent focus:outline-none text-base sm:text-lg md:text-lg pl-8 z-10"
          />
        </motion.div>

        <motion.button
          type="submit"
          className="flex justify-between items-center px-6 py-2 rounded-md bg-neutral-600 hover:bg-neutral-700 transition font-medium text-base sm:text-lg md:text-lg text-cyan-50 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <SendHorizonal className="w-5 h-5 text-neutral-400 ml-1.5" />
        </motion.button>
      </form>
    </div>
  );
}

export default App;
