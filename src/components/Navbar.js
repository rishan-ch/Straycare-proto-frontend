import { Link } from "react-router-dom"


export default function Navbar(){
    return(
        <nav className="flex min-w-full justify-around text-2xl py-5 bg-blue-500">
            <Link to="/">StrayCare</Link>
            <ul className="flex gap-10">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add Animal</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    )
};