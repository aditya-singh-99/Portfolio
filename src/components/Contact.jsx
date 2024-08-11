
function Contact() {
  return (
    <div id="contact" className="dark:bg-slate-900">
      <div className="container max-w-[1024px] mx-auto">
        {/* top */}
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-indigo-600 font-bold">CONTACT</h1>
          <h1 className="text-3xl dark:text-white">Have a Question?</h1>
          <p className="w-1/2 text-center text-gray-400">
            Do you have an idea? Let's discuss it and see what we can do together.
          </p>
        </div>
        {/* bottom */}
        <form className="mt-5 p-8 flex flex-col gap-5 items-center">
          <input
            className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            type="text"
            placeholder="Name"
          />
          <input
            className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            type="email"
            placeholder="Email"
          />
          <textarea
            className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            cols={30}
            rows={10}
            placeholder="Message..."
          />
          <button className="w-1/2 bg-gradient-to-r from-black from-50% to-indigo-600 to-50% bg-[length:200%_100%] bg-right-bottom hover:bg-left-bottom transition-all duration-500 text-white font-medium px-3 py-2 rounded-md cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact