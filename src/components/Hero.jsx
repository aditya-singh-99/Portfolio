import { useEffect } from "react"
import AutoTyping from "../autotyping";

function Hero() {
  useEffect(() => {
    const exampleText = ['FullStack', 'FrontEnd', 'BackEnd',];
    const exampleTyping = new AutoTyping('#text', exampleText, {
      typeSpeed: 100,
      deleteSpeed: 100,
      waitBeforeDelete: 2000,
      waitBetweenWords: 500,
    });
    exampleTyping.start()
  }, [])
  return (
    <>
      {/* image */}
      <img
        src="./img/man.png"
        className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover"
      />
      {/* circle */}
      <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-[48rem] h-[48rem] bg-indigo-900 rounded-full -z-10" />
      {/* animated text */}
      <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold">
        <span className="text-gray-600">I am good at</span>
        <p id="text" className="text-red-500" />
      </div>
      {/* texts */}
      <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3">
        <h1 className="text-4xl font-bold text-indigo-900">Hi, I'm Aditya Singh</h1>
        <p className="text-gray-400">With a strong foundation in HTML, CSS, JavaScript, and expertise in frameworks like React.js, I build responsive, user-friendly websites and applications. My focus is on delivering high-quality code and creating delightful digital experiences that solve real-world problems. Explore my portfolio to see the projects I've worked on and how I can help bring your vision to life.</p>
        <a
          className="bg-gradient-to-r from-black from-50% to-indigo-600 to-50% bg-[length:200%_100%] bg-right-bottom hover:bg-left-bottom transition-all duration-500 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
          href="#contact"
        >
          Hire Me
        </a>
      </div>
    </>
  )
}

export default Hero