import Link from "next/link";

function Hero() {
    return(
        <div className="">
            <div className="mt-18 p-4 ml-4 sm:mt-20 sm:p-4 sm:ml-6 md:mt-24 md:p-6 md:ml-8 lg:mt-28 lg:p-9 lg:ml-10">
            <p className="font-sans text-xl ml-1 sm:text-1xl md:text-2xl lg:text-3xl">Hey I m Saud</p>
            <h1 className="font-sans text-xl font-normal sm:text-2xl sm:font-bold md:text-3xl md:font-bold lg:text-5xl lg:font-bold flex gap-1 mt-2"><h1 className="text-[#6E06F2]">JUNIOR</h1>UI/UX</h1>
            <h1 className="font-sans text-xl font-normal sm:text-2xl sm:font-bold md:text-3xl md:font-bold lg:text-5xl lg:font-bold ">DEVELOPER</h1>
            <p className="font-sans sm::text-sm md:text-sm sm:text-sm md:text-1xl lg:text-2xl ml-1 mt-2">You will begin to realise why this excercise is called the Dickens Pattern with <br /> reference to the ghost showing Scoorge some different futures</p>
            <button className="font-sans border-2 border-black p-2 mt-3 rounded-xl text-2xl bg-black text-white ml-1">Get In Touch</button>
            <Link href="./projects"><button className="font-sans border-2 border-black p-2 ml-2 mt-2 rounded-xl text-2xl">Browse Projects</button></Link>
            </div>
            
        </div>
    );
}

export default Hero