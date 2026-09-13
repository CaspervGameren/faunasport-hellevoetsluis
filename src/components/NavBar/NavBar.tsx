import { NavLink } from "react-router-dom"
import { Button } from "../utils/Button"

export const NavBar = () => {
    return (
        <nav className="grid grid-cols-3 w-full h-20 items-center justify-center px-6 border-b">
            <img className="mr-auto" src="/faunasport-hellevoetsluis-light.png" alt="Faunasport Hellevoetsluis as a logo" />

            <div className="m-auto">
                <ul className="flex gap-10">
                    <li className="uppercase pointer py-2 px-4 rounded-sm hover:bg-accent"><NavLink to="/">Home</NavLink></li>
                    <li className="uppercase pointer py-2 px-4 rounded-sm hover:bg-accent"><NavLink to="/about">Informatie</NavLink></li>
                    <li className="uppercase pointer py-2 px-4 rounded-sm hover:bg-accent"><NavLink to="/services">Services & Zorg</NavLink></li>
                    <li className="uppercase pointer py-2 px-4 rounded-sm hover:bg-accent"><NavLink to="/agenda">Agenda</NavLink></li>
                    <li className="uppercase pointer py-2 px-4 rounded-sm hover:bg-accent"><NavLink to="/pictures">Foto's</NavLink></li>
                </ul>
            </div>

            <Button className="ml-auto w-fit">
                <a href="/home#contact" className='m-auto'>Lid Worden</a>
            </Button>

        </nav>
    )
}