import Link from "next/link";
function Navbar(){
    return(
            <div className="p-3">
                <div className="flex justify-between">
                    <img src="./logo.jpg" alt="logo" className="w-16 md:w-20 lg:w-34 xl:w-38"/>
                    <nav className="flex items-center justify-between gap-4 md:gap-6 lg:gap-8">
                        <div className="text-[#020202] font-sans text-lg md:font-sans md:text-2xl lg:font-sans lg:text-3xl hover:text-[#6E06F2]"><Link href="./">Home</Link></div>
                        <div className="text-[#020202] font-sans text-lg md:font-sans md:text-2xl lg:font-sans lg:text-3xl hover:text-[#6E06F2]"><Link href="./projects">Projects</Link></div>
                        <div className="text-[#020202] font-sans text-lg md:font-sans md:text-2xl lg:font-sans lg:text-3xl hover:text-[#6E06F2]"><Link href="./about">About</Link></div>
                        <div className="text-[#020202] font-sans text-lg md:font-sans md:text-2xl lg:font-sans lg:text-3xl hover:text-[#6E06F2]"><Link href="./contact">Contact Us</Link></div>
                    </nav>
                    <img src="./message.jpg" alt="icon" className="w-16 md:w-24 lg:w-34 xl:w-38"/>
                </div>
            </div>

);
}

export default Navbar