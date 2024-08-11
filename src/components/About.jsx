
function About() {
  return (
    <div id="about" className="px-10 bg-gradient-to-b from-indigo-200 to-50% lg:to-100% dark:from-slate-800 dark:to-slate-900">
      <div className="container max-w-[1024px] mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
        {/* left */}
        <div className="relative">
          <img
            className="h-1/4 absolute top-0 left-0 -z-10"
            src="./img/dots.png"
            alt=""
          />
          <div className="h-full rounded-full overflow-hidden">
            <img src="./img/portrait.png" alt="" />
          </div>
        </div>
        {/* right */}
        <div className="my-auto flex flex-col gap-3">
          <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>
          <h1 className="text-3xl font-medium dark:text-white">Crafting Seamless User Experiences with Modern Web Technologies</h1>
          <p className="text-gray-400">I design and build digital products. I'm also a multi-disciplinary maker with experience in wide range of design disciplines.</p>
          <h2 className="text-gray-400 font-medium">HTML</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-full bg-indigo-600 h-1.5 rounded-md" />
          </div>
          <h2 className="text-gray-400 font-medium">Javascript</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md" />
          </div>
          <h2 className="text-gray-400 font-medium">React.js</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md" />
          </div>
          <h2 className="text-gray-400 font-medium">Node.js</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-4/6 bg-indigo-600 h-1.5 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About