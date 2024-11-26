import Navbar from "../navbar";
import Link from "next/link";


function About() {
    return(
        <div className="">
            <Navbar />
            <h1 className="font-sans sm:text-2xl sm:font-semibold md:text-4xl md:font-bold lg:text-8xl text-center mt-10 text-[#6E06F2] lg:font-extrabold">About me.</h1>
            <div className="sm:h-28 sm:ml-2 sm:mt-16 md:h-24 md:ml-3 md:mt-16 lg:h-24 lg:ml-3 lg:mt-16">
            <img src="banner.jpg" alt="" className="w-28 sm:w-36 md:w-48 sm:mt-10 lg:w-56 ml-10 lg:mt-12 rounded-lg"/>
            <p className="-mt-48 ml-40 text-sm sm:text-lg sm:-mt-64 sm:ml-48 md:-mt-80 md:ml-60 lg:-mt-80 lg:ml-72 md:text-xl font-sans lg:text-4xl"> Hi I am Saud Bin Zubair a passionate front end developer skilled in HTML CSS and JavaScript. I enjoy creating visually appealing and user friendly websites that bring ideas to life. Currently I am diving deeper into modern web development by learning Next.js and Tailwind CSS to enhance my skills and build scalable responsive applications. I love solving problems exploring new technologies and turning creative concepts into reality. Lets create something amazing together</p>
            <div className="ml-40 flex sm:ml-48 sm:-mt-1 md:ml-64 lg:ml-72 mt-2 gap-2">
               <Link href="https://mail.google.com"><img src="Gmail.jpg" alt="" className="w-10"/></Link>
               <Link href="https://www.linkedin.com/in/saud-zubair-955a98175/"><img src="Linkenden.jpg" alt="" className="w-10"/></Link>
               <Link href="https://github.com/Saud840"><img src="github.jpg" alt="" className="w-10"/> </Link>
            </div>
            </div>
           
        </div>
    );
}



export default About