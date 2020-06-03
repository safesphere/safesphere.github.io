import React, { useState } from "react";
import Navigation from "./navigation";
import Hamburger from "./hamburger";
import styles from "./header.module.scss";

function Header() {
  const [showMenu, toggleMenu] = useState(false);

  return (
    <nav role="navigation" className={styles.header} data-menu-show={showMenu}>
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
