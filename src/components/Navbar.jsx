import Github from "../ui/Github"
import Logo from "../ui/Logo"

const Navbar = ()=>{
    return(
        <nav className="h-12 bg-slate-800 flex justify-between items-center px-8">
           <div className="text-2xl text-white"><Logo/></div>

           <Github/>
        </nav>
    )
}

export default Navbar 