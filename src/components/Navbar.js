import {useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css"

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3>Logo</h3>
            {/* <img src="../static/img/logo.png" alt="" /> */}
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/">모집게시판</a>
                <a href="/">채팅</a>
                <a href="/">마이메뉴</a>
                <a href="./Login.js">로그인</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>

    );
}

export default Navbar;