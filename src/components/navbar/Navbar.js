import React from 'react'
import { MenuItems } from "./MenuItems"
import "./Navbar.css"


function Navbar() {
    const [isClicked, setIsClicked] = React.useState(false)

    function handleClick () {
        setIsClicked(!isClicked)
    }

    const [isAboutClicked, setIsAboutClicked] = React.useState(false)

    function handleAboutClick () {
        setIsAboutClicked(!isAboutClicked)
    }

    return(
        <nav className="navbar-container">
            
            <ul className={isClicked? "nav-menu active":"nav-menu"}>
                {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    }
                )}
            </ul>
        </nav>
    )
}

export default Navbar