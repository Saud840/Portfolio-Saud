import Navbar from "../navbar";
import Link from "next/link";

function Projects() {
    return(
        
        <div className="">
            <Navbar />
            <div>
                <h1 className="font-sans sm:text-2xl sm:font-semibold md:text-4xl md:font-bold lg:text-8xl text-center mt-4 text-[#6E06F2] lg:font-extrabold">PROJECTS</h1>
            </div>
            <div className="sm:flex sm:items-center sm:justify-evenly sm:gap-2 md:flex md:items-center md:justify-evenly md:gap-3 lg:flex lg:items-center lg:justify-around lg:gap-5 border-4 border-black w-auto ml-4 mr-4 mt-4">
            <Link href="https://saud840.github.io/Calculator/"><img src="./calculator.png" alt="Calculator" className="mt-4 ml-2 w-16 sm:mt-4 sm:ml-3 sm:w-28 md:mt-4 md:ml-3 md:w-36 lg:mt-4 lg:ml-16 lg:w-60 lg:h-80" /></Link>
            <Link href="https://weatherappbysaud.netlify.app/"><img src="./app.png" alt="Calculator" className="mt-4 ml-2 w-16 sm:mt-5 sm:ml-3 sm:w-28 sm:h-40 md:mt-4 md:ml-3 md:w-44 md:h-52 lg:mt-5 lg:ml-8 lg:w-72 lg:h-80" /></Link>
            <Link href="https://saud840.github.io/Registration-Page-Practice/"><img src="./registration.png" alt="Calculator" className="mt-4 ml-2 w-16 sm:mt-5 sm:ml-3 sm:w-28  sm:h-40 md:mt-4 md:ml-3 md:w-44 md:h-52 lg:mt-4 lg:ml-8 lg:w-72 lg:h-80" /></Link>
            <Link href="https://webpage-governerinitiative-bysaud-hinpsz0ky-shah-sauds-projects.vercel.app/"><img src="./WEBPAGE.png" alt="Calculator" className="mt-4 ml-2 w-16 sm:mt-5 sm:ml-3 sm:w-28  sm:h-40 md:mt-4 md:ml-1 md:w-44 md:h-52 lg:mt-4 lg:ml-8 lg:w-72 lg:h-80" /></Link>  
            </div>
            
        </div>
    );
}

export default Projects