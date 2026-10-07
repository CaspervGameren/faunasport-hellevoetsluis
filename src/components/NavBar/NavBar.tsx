import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Button } from "../utils/Button"

const navigationItems = [
    { label: "Home", to: "/" },
    { label: "Informatie", to: "/about" },
    { label: "Services & Zorg", to: "/services" },
    { label: "Agenda", to: "/agenda" },
    { label: "Foto's", to: "/pictures" },
]

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const desktopBreakpoint = window.matchMedia("(min-width: 1024px)")

        // Prevent a previously opened mobile menu from staying open after switching to desktop.
        const handleBreakpointChange = (event: MediaQueryListEvent) => {
            if (event.matches) {
                setIsMenuOpen(false)
            }
        }

        desktopBreakpoint.addEventListener("change", handleBreakpointChange)

        return () => {
            desktopBreakpoint.removeEventListener("change", handleBreakpointChange)
        }
    }, [])

    const closeMenu = () => setIsMenuOpen(false)

    return (
        <nav className="relative w-full border-b bg-light">
            <div className="grid h-20 grid-cols-2 items-center px-6 lg:grid-cols-3">
                <NavLink to="/" className="mr-auto" onClick={closeMenu}>
                    <img
                        src="/faunasport-hellevoetsluis-light.png"
                        alt="Faunasport Hellevoetsluis"
                    />
                </NavLink>

                <div className="hidden lg:block lg:m-auto">
                    <ul className="flex gap-10">
                        {navigationItems.map((item) => (
                            <li
                                key={item.to}
                                className="rounded-sm px-4 py-2 uppercase hover:bg-accent"
                            >
                                <NavLink to={item.to}>{item.label}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="ml-auto flex items-center gap-3">
                    <Button className="hidden w-fit lg:block">
                        <a href="/home#contact" className="m-auto">Lid Worden</a>
                    </Button>

                    <button
                        type="button"
                        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-sm hover:bg-brand lg:hidden"
                        aria-label={isMenuOpen ? "Navigatiemenu sluiten" : "Navigatiemenu openen"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <span
                            className={`h-0.5 w-6 bg-dark transition-transform duration-200 ${
                                isMenuOpen ? "translate-y-2 rotate-45" : ""
                            }`}
                        />
                        <span
                            className={`h-0.5 w-6 bg-dark transition-opacity duration-200 ${
                                isMenuOpen ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <span
                            className={`h-0.5 w-6 bg-dark transition-transform duration-200 ${
                                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                            }`}
                        />
                    </button>
                </div>
            </div>

            <div
                id="mobile-navigation"
                className={`absolute left-0 right-0 z-50 border-b bg-light px-6 py-4 shadow-md lg:hidden ${
                    isMenuOpen ? "block" : "hidden"
                }`}
            >
                <ul className="flex flex-col">
                    {navigationItems.map((item) => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className="block rounded-sm px-4 py-3 uppercase hover:bg-accent"
                                onClick={closeMenu}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <Button className="mt-4 w-full">
                    <a href="/home#contact" className="block w-full" onClick={closeMenu}>
                        Lid Worden
                    </a>
                </Button>
            </div>
        </nav>
    )
}
