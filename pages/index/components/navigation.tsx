import React, { useEffect, useCallback, useState } from "react";
import styles from "./navigation.module.scss";

function Navigation() {
  const setActive = useCallback(throttle(updateActiveLink, 300), []);

  useEffect(() => {
    window.addEventListener("scroll", setActive);
    return () => window.removeEventListener("scroll", setActive);
  }, []);

  return (
    <ul className={styles.menu}>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#how-it-works">How it works</a>
      </li>
      <li>
        <a href="#use-cases">Use cases</a>
      </li>
      <li>
        <a href="#user-privacy">User privacy</a>
      </li>
      <li>
        <a href="#founding-team">Founding Team</a>
      </li>
      <li>
        <a href="#contact-us">Contact us</a>
      </li>
    </ul>
  );
}

function throttle(callback: Function, limit: number) {
  let lastFunc: number;
  let lastRan: number;

  return function () {
    const context = window;
    const args = arguments;
    if (!lastRan) {
      callback.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = window.setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          callback.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

function updateActiveLink() {
  const OFFSET = 300;
  const mainNavLinks: NodeList = document.querySelectorAll("nav ul li a");
  const fromTop = window.scrollY;

  mainNavLinks.forEach((link) => {
    const _link = link as HTMLAnchorElement;
    let section: HTMLElement | null = document.querySelector(_link.hash);

    if (
      section &&
      section.offsetTop - OFFSET <= fromTop &&
      section.offsetTop + section.offsetHeight - OFFSET > fromTop
    ) {
      _link.setAttribute("aria-current", "true");
    } else {
      _link.removeAttribute("aria-current");
    }
  });
}

export default Navigation;
