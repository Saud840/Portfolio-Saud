import Navbar from "../navbar";

function Contact() {
    return(
        <div>
            <Navbar  />
            <h1 className="font-sans sm:text-2xl sm:font-semibold md:text-4xl md:font-bold lg:text-8xl text-center mt-10 text-[#6E06F2] lg:font-extrabold">Contact Us</h1>
        <form className="p-10 m-10 mt-10">
            <div >
            <label className="font-bold text-lg">Name: </label>
            <input type="text" placeholder="Name" required className="p-2 m-2 border-1 border-black"/>
            </div>
            <div>
            <label className="font-bold text-lg">Email: </label>
            <input type="email" placeholder="Email" required className="p-2 m-2 border-1 border-black"/>
            </div>
            <div>
            <label className="font-bold text-lg">Message: </label>
            <textarea name="" id=""  placeholder="Message" rows={2} required className="p-2 m-2 border-1 border-black"></textarea>
            </div>
            <div>
            <label className="font-bold text-lg">Suggestion: </label>
            <input type="text" placeholder="Any Suggestions" className="p-2 m-2 border-1 border-black"/>
            </div>
            <div>
            <button className="border-2 p-4 w-40 m-2 mt-6 rounded-2xl font-semibold hover:bg-black hover:text-white">Submit</button>
            </div>
        </form>
            
        </div>
    );
}

export default Contact