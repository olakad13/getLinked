import styles from "./Header.module.css"
import { NavLink } from "react-router-dom";
import Menu from "../../assets/menu.svg"
import closeIcon from "../../assets/closeBtn.svg"
import { useRef } from "react";


const Header = () => {

    const handleClick = (e) => {
        const navMenu = document.getElementById("nav")
        
        if (e.target.id == "menu") { 

            navMenu.classList.add(styles.slideIn)

        } else if (e.target.id == "closeBtn") {

            navMenu.classList.remove(styles.slideIn)
        }
    }
    
    return (
        <header className={styles.header}>

            <div className={`${styles.innerWrapper} wrapper`}>
                <h1 className={styles.headerText}>get<span>linked</span></h1>

                <nav id="nav" className={styles.nav}>
                    <NavLink className={styles.navlink}>Timeline</NavLink>
                    <NavLink className={styles.navlink}>Overview</NavLink>
                    <NavLink className={styles.navlink}>FAQs</NavLink>
                    <NavLink className={styles.navlink}>Contact</NavLink>
                    <button className={styles.registerBtn}><NavLink className={styles.navlink}>Register</NavLink></button>
                    
                    <button id="closeBtn" onClick={handleClick} className={styles.outerCircle}>
                        <div className={styles.closeBtn}>
                            <img src={closeIcon} alt="" />
                        </div>
                    </button>
                </nav>

                <button id="menu" onClick={handleClick} className={styles.menu}><img src={Menu} alt="Hamburger Menu"  /></button>
            </div>

        </header>
    )
}

export default Header;