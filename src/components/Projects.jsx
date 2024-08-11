
function Projects() {
  return (
    <div id="works" className="py-40 dark:bg-slate-900">
      <div className="container max-w-[1024px] mx-auto">
        {/* top */}
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-indigo-600 font-bold">PORTFOLIO</h1>
          <h1 className="text-3xl dark:text-white">Works &amp; Projects</h1>
          <p className="w-1/2 text-center text-gray-400">
            I help designers, small agencies and businesses bring their ideas to
            life. Powered by Figma, VS Code and coffee, I turn your requirements
            into a well-designed websites
          </p>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between">
          {/* card */}
          <div className="relative group w-[90%] lg:w-[45%] bg-gradient-to-r from-indigo-100 dark:from-black from-50% to-white dark:to-slate-800 to-50% bg-[length:200%_100%] bg-right-bottom hover:bg-left-bottom transition-all duration-500 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3 mx-auto hover:scale-105">
            <span className="absolute hidden group-hover:block top-0 right-0 text-4xl dark:text-white font-extrabold">01</span>
            <h1 className="font-medium text-lg dark:text-white">Weather Application</h1>
            <p className="text-gray-400">A sleek, modern weather application designed to provide users with real-time weather updates, forecasts, and essential weather-related information. The application offers a responsive and intuitive user interface that works seamlessly across various devices.</p>
            <p className="text-gray-400">
              <span className="text-black dark:text-white bold">Tech Used:</span> HTML,CSS and Javascript
              <br />
              <span className="text-black dark:text-white bold">APIs Used:</span> OpenWeatherMap API
            </p>
            <a className="text-indigo-600 font-semibold text-sm" href="https://github.com/aditya-singh-99/weather-application" target="_blank">Git Repository</a>
          </div>
          {/* card */}
          <div className="relative group w-[90%] lg:w-[45%] bg-gradient-to-r from-indigo-100 dark:from-black from-50% to-white dark:to-slate-800 to-50% bg-[length:200%_100%] bg-right-bottom hover:bg-left-bottom transition-all duration-500 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3 mx-auto hover:scale-105">
            <span className="absolute hidden group-hover:block top-0 right-0 text-4xl dark:text-white font-extrabold">02</span>
            <h1 className="font-medium text-lg dark:text-white">Currency Convertor</h1>
            <p className="text-gray-400">A powerful and efficient currency converter application designed to meet the needs of travelers, business professionals, and anyone dealing with multiple currencies. The application ensures a smooth and responsive user experience on any device.</p>
            <p className="text-gray-400">
              <span className="text-black dark:text-white bold">Tech Used:</span> HTML,CSS and Javascript
              <br />
              <span className="text-black dark:text-white bold">APIs Used:</span> ExchangeRate API
            </p>
            <a className="text-indigo-600 font-semibold text-sm" href="https://github.com/aditya-singh-99/Currency-Convertor" target="_blank">Git Repository</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects