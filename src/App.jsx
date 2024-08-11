import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <>
      <div className="h-[50vh] lg:h-[100vh] bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
