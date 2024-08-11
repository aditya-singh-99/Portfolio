
function Footer() {
  return (
    <footer className="w-full bg-gray-800">
      <div className="container max-w-[1024px] mx-auto py-5 flex items-center justify-between">
        <div className="w-48 h-12 overflow-hidden flex items-center">
          <img src="./img/logo-dark.png"/>
        </div>
        <span className="hidden md:block font-medium text-white">
          Designed with ♥️ by Aditya Kumar Singh
        </span>
        <div className="flex gap-2">
          <img className="w-4 cursor-pointer" src="./img/facebook.png" alt="" />
          <img className="w-4 cursor-pointer" src="./img/instagram.png" alt="" />
          <img className="w-4 cursor-pointer" src="./img/twitter.png" alt="" />
          <img className="w-4 cursor-pointer" src="./img/linkedin.png" alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer