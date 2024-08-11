import { useState } from "react"

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  const [darkLogo, setDarkLogo] = useState(false)

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function toggleDarkMode() {
    document.body.classList.toggle("dark");
    setDarkLogo(!darkLogo);
  }

  return (
    <nav className="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
      <div className="container max-w-[1024px] mx-auto py-5 flex items-center justify-between">
        <div className="w-48 h-12 overflow-hidden flex items-center">
          {darkLogo ? <img src="./img/logo-dark.png" /> : <img src="./img/logo-light.png" />}
          <img src="./img/logo-light.png" />
        </div>
        <ul className="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase">
          <li className="hover:text-gray-500">
            <a href="#">homepage</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#about">about me</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#skills">skills</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#works">works</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#contact">contact</a>
          </li>
        </ul>
        <img
          src="./img/moon.png"
          className="hidden md:block w-5 cursor-pointer"
          onClick={toggleDarkMode}
        />
        <div className="space-y-1 md:hidden cursor-pointer z-20"
          onClick={toggleMenu}>
          <div className={`w-6 h-0.5 ${showMenu ? "bg-white" : "bg-black"}`} />
          <div className={`w-6 h-0.5 ${showMenu ? "bg-white" : "bg-black"}`} />
          <div className={`w-6 h-0.5 ${showMenu ? "bg-white" : "bg-black"}`} />
        </div>
        {showMenu && (
          <ul className="bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
            <li onClick={toggleMenu}>
              <a href="#">
                homepage
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#about">
                about me
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#skills">
                skills
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#works">
                works
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#contact">
                contact
              </a>
            </li>
            <li onClick={toggleDarkMode}>
              <img
                src="./img/moon.png"
                className="w-5 mx-auto cursor-pointer"
              />
            </li>
          </ul>
        )}

      </div>
    </nav>
  )
}

export default Navbar