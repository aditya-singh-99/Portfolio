import { useEffect, useRef, useState } from "react";

function Skills() {

  const skills = [
    {
      title: "Web Development",
      content: "Creating visually appealing and user-friendly interfaces using frameworks like React.js. Building robust server-side applications with Node.js. Combining front-end and back-end development to deliver complete web solutions."
    },
    {
      title: "Responsive Design",
      content: "Ensuring websites look great and function well on all devices, from desktops to smartphones, using responsive design principles and frameworks like Tailwind CSS or Bootstrap."
    },
    {
      title: "Web Application Development",
      content: "Developing dynamic and interactive web applications that provide an excellent user experience."
    },
    {
      title: "E-commerce Solutions",
      content: "Building and maintaining online stores with features like product listings, shopping carts, payment gateways, and order management systems."
    },
    {
      title: "API Development and Integration",
      content: " Creating and integrating APIs to connect different software systems and services, enabling seamless data exchange and functionality"
    },
    {
      title: "Performance Optimization",
      content: "Enhancing website performance by optimizing loading times, reducing file sizes, and implementing best practices for speed and efficiency."
    },
  ]

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setIndex((index + 1) % skills.length), 3000);
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div id="skills" className="dark:bg-slate-900">
      <div className="container max-w-[1024px] mx-auto overflow-hidden">
        {/* top */}
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-indigo-600 font-bold">SKILLS</h1>
          <h1 className="text-3xl dark:text-white">What do I offer?</h1>
          <p className="w-1/2 text-center text-gray-400">
            My approach to website design is to create a website that strengthens
            your company's brand while ensuring ease of use and simplicity for
            your audience.
          </p>
        </div>
        {/* bottom */}
        <div className="w-full hidden md:flex gap-[5%] transition-all duration-1000" style={{ transform: `translatex(${-(index - 1) * 35}%)` }}>
          {skills.map((skill, ind) => (
            <div key={ind} className="min-w-[30%] dark:bg-slate-800 shadow-xl rounded-lg p-5 my-10 flex flex-col gap-3">
              <img className="w-10 mx-auto" src="./img/icon.png" />
              <h1 className="font-medium text-lg dark:text-white">{skill.title}</h1>
              <p className="text-gray-400">{skill.content}</p>
              <a className="text-indigo-600 font-semibold text-sm" href="#">Read More</a>
            </div>
          ))}
        </div>
        <div className="w-full flex md:hidden transition-all duration-1000" style={{ transform: `translatex(${-(index) * 100}%)` }}>
          {skills.map((skill, ind) => (
            <div key={ind} className="min-w-full dark:bg-slate-800 shadow-xl rounded-lg p-5 my-3 flex flex-col gap-3">
              <img className="w-10 mx-auto" src="./img/icon.png" />
              <h1 className="font-medium text-lg dark:text-white">{skill.title}</h1>
              <p className="text-gray-400">{skill.content}</p>
              <a className="text-indigo-600 font-semibold text-sm" href="#">Read More</a>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 w-fit flex cursor-pointer">
          <div className="text-three text-3xl max-w-4 max-h-4 mx-2 flex justify-center items-center" onClick={() => setIndex((index - 1 + services.length) % services.length)}>&#8592;</div>
          {skills.map((skill, ind) => (
            <div key={ind} className={`w-4 h-4 mx-2 rounded-full ${index == ind ? "bg-indigo-600" : "bg-indigo-300"}`} onClick={() => setIndex(ind)}></div>
          ))}
          <div className="text-three text-3xl max-w-4 max-h-4 mx-2 flex justify-center items-center" onClick={() => setIndex((index + 1) % services.length)}>&#8594;</div>
        </div>
      </div>
    </div>
  )
}

export default Skills