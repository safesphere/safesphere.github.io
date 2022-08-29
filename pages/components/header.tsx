import React, { useState, useEffect } from "react";
import Navigation from "./navigation";
import Hamburger from "./hamburger";
import styles from "./header.module.scss";

function Header() {
  const [showMenu, toggleMenu] = useState(false);
  const [scrolled, toggleScrolled] = useState(false);

  function toggleScrolledMenu() {
    const scrollY = window && window.scrollY;
    toggleScrolled(scrollY > 70);
  }

  useEffect(() => {
    document.addEventListener("scroll", toggleScrolledMenu);
    return () => document.removeEventListener("scroll", toggleScrolledMenu);
  });

  return (
    <nav
      role="navigation"
      className={styles.header}
      data-menu-show={showMenu}
      data-menu-scrolled={scrolled}
    >
      <a href="./" className={styles.logo}>
        <img src="/assets/safesphere-logo.svg" alt="SafeSphere logo" />
      </a>

      <div className={styles.toggle}>
        <Hamburger
          label="Toggle menu"
          active={showMenu}
          onClick={() => toggleMenu(!showMenu)}
        />
      </div>

      <div className={styles.nav}>
        <Navigation />
      </div>
    </nav>
  );
}

export default Header;
