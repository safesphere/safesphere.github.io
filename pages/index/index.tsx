import { AppProps } from "next/app";
// import { H2 } from "../components";
import styles from "./index.module.scss";

export default function Home(props: AppProps) {
  const {} = props;

  return (
    <div className="container">
      <img src="/assets/safesphere-logo.svg" />
      <nav role="navigation">
        <ul>
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
      </nav>
      <main>
        <section className={styles.section}>
          <h2 className="subheading">
            Bringing the world closer but not too close.
          </h2>
        </section>

        <section id="about" className={styles.section}>
          <header>
            <h2 className="h2">About</h2>
            <p className="subheading">What is SafeSphere</p>
          </header>
        </section>

        <section id="how-it-works" className={styles.section}>
          <header>
            <h2 className="h2">How it works</h2>
            <p className="subheading">A sound solution</p>
          </header>
        </section>

        <section id="use-cases" className={styles.section}>
          <header>
            <h2 className="h2">Use cases</h2>
            <p className="subheading">Who would benefit?</p>
          </header>
        </section>

        <section id="user-privacy" className={styles.section}>
          <header>
            <h2 className="h2">User Privacy</h2>
            <p className="subheading">No quid pro quo</p>
          </header>
        </section>

        <section id="founding-team" className={styles.section}>
          <header>
            <h2 className="h2">SafeSphere’s Founding Team</h2>
            <p className="subheading">Where STEM Solves Everyday Challenges </p>
          </header>
        </section>

        <section id="contact-us" className={styles.section}>
          <header>
            <h2 className="subheading">SafeSphere your business</h2>
          </header>
        </section>
      </main>
    </div>
  );
}
