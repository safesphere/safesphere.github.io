import { AppProps } from "next/app";

import Header from "./components/header";
import styles from "./index.module.scss";

export default function Home(props: AppProps) {
  const {} = props;

  return (
    <div className="container">
      <Header />

      <main>
        {/**
         * Intro section
         */}
        <section className={`${styles.section} ${styles.columns}`}>
          <div>
            <h2 className={`subheading ${styles.topTitle}`}>
              <span style={{ whiteSpace: "nowrap" }}>
                Bringing the world closer
              </span>
              <br />
              <span className="accent">but not too close.</span>
            </h2>
            <br />

            <p>
              SafeSphere's mission is to help institutions and businesses create
              a safe environment for employees and their customers. Our
              proprietary technology helps companies protect and empower people
              in their workplace, by identifying proximity risks with zero data
              stored.
            </p>

            <p>
              <strong>
                It's time to give people back their safety and their lives. We
                help you create a SafeSphere.
              </strong>
            </p>
            <br />
            <a href="#about" className="button">
              Learn More
            </a>
          </div>
          <div className={`${styles.firstColumn}`}>Video</div>
        </section>

        {/**
         * About section
         */}
        <section id="about" className={`${styles.section} ${styles.columns}`}>
          <div>
            <header>
              <h2 className="h2">About</h2>
              <p className="subheading">What is SafeSphere</p>
            </header>
            <br />
            <p>
              SafeSphere is a revolutionary technology that accurately
              determines the distance between two or more smartphone users over
              time when integrated with your mobile app.
            </p>
            <p>
              <strong>
                The state-of-the-art technology constantly analyzes proximity
                data between smartphones.
              </strong>
            </p>
          </div>
          <img
            src="/assets/illustration-about.svg"
            alt=""
            style={{ width: "100%", alignSelf: "center" }}
          />
        </section>

        {/**
         * How it works section
         */}
        <section
          id="how-it-works"
          className={`${styles.section} ${styles.columns}`}
        >
          <img
            src="/assets/illustration-solution.svg"
            alt=""
            style={{ width: "100%", alignSelf: "center" }}
          />
          <div>
            <header>
              <h2 className="h2">How it works</h2>
              <p className="subheading">A sound solution</p>
            </header>
            <br />
            <ul className="bullet">
              <li>
                Using precise acoustic signals, SafeSphere’s patent-pending
                proprietary algorithms determine how close users are to each
                other, alerting them to keep a safe distance.
              </li>
              <li>
                The indicator is highly-customizable and works with any mobile
                app technology to help provide a safe environment. (where we
                congregate, live, work, shop, travel, play, learn, and worship){" "}
              </li>
              <li>
                Thanks to its unique algorithm, SafeSphere minimizes exposure in
                unsafe environments by monitoring short distances between people
                over time.
              </li>
              <li>
                No other technology can deliver proximity with accuracy for
                short distances like SafeSphere on mobile devices.
              </li>
            </ul>
          </div>
        </section>

        {/**
         * Use cases section
         */}
        <section
          id="use-cases"
          className={`${styles.section} ${styles.columns}`}
        >
          <div>
            <header>
              <h2 className="h2">Use cases</h2>
              <p className="subheading">Who would benefit?</p>
            </header>
            <br />
            <p>
              <strong>
                SafeSphere was designed from the ground up to help keep everyone
                safe: employees, customers, students, teachers, senior citizens,
                families, and friends.
              </strong>
            </p>
            <p>
              By integrating SafeSphere’s technology, your mobile app will
              notify you when crowded areas become unsafe. With minimal costs
              and physical changes to your facilities, users can create safer
              movement flows during daily activities.
            </p>
          </div>
          <ul className={styles.useCases}>
            <li>
              <img src="/assets/icon-supermarkets.svg" alt="" />
              Supermarkets and retail spaces
            </li>
            <li>
              <img src="/assets/icon-sports.svg" alt="" />
              Sports arenas and Gyms
            </li>
            <li>
              <img src="/assets/icon-universities.svg" alt="" />
              Universities
            </li>
            <li>
              <img src="/assets/icon-restaurants.svg" alt="" />
              Restaurants
            </li>
            <li>
              <img src="/assets/icon-office.svg" alt="" />
              Office buildings and factories
            </li>
            <li>
              <img src="/assets/icon-hospitals.svg" alt="" />
              Healthcare institutions
            </li>
            <li>
              <img src="/assets/icon-airports.svg" alt="" />
              Airports and train stations
            </li>
            <li>
              <img src="/assets/icon-parks.svg" alt="" />
              Public parks
            </li>
          </ul>
        </section>

        {/**
         * User privacy section
         */}
        <section
          id="user-privacy"
          className={`${styles.section} ${styles.columns}`}
        >
          <img
            src="/assets/illustration-security.svg"
            alt=""
            style={{ width: "400px", alignSelf: "center" }}
          />
          <div style={{ alignSelf: "center" }}>
            <header>
              <h2 className="h2">User Privacy</h2>
              <p className="subheading">No quid pro quo</p>
            </header>
            <br />
            <p>
              SafeSphere is here to help you create a secure environment in a
              transparent, easy-to-implement, and scalable way.
            </p>
            <p>
              <strong>
                We tackle safety with a 360-approach: No data stored and
                complete user privacy. Our priority is employee and customer
                well-being all around.
              </strong>
            </p>
          </div>
        </section>

        {/**
         * Founding team section
         */}
        <section id="founding-team" className={styles.section}>
          <div className={styles.columns}>
            <div>
              <header>
                <h2 className="h2">SafeSphere’s Founding Team</h2>
                <p className="subheading">
                  Where STEM Solves Everyday Challenges
                </p>
              </header>
            </div>
            <div>
              <p>
                <strong>
                  SafeSphere is the result of a major collaborative effort
                  between business leaders, medical professionals, engineers,
                  and scientists.
                </strong>
              </p>
              <p>
                We gathered some real brainpower to create a new, accurate, and
                inexpensive way to create a safe space for our sphere of
                interest, on your mobile device. We are a joint venture between
                Espresoh Tech, a US-based product engineering company, and
                Alpine Consolidated, investing in first-to-market businesses for
                more than 25 years.
              </p>
            </div>
          </div>

          <section>
            <h3 className="h2">Management</h3>
            <ul className={styles.team}>
              <li>
                <strong className={styles.teamName}>Elan Blutinger</strong>
                <span className={styles.teamRole}>Chief Executive Officer</span>
              </li>
              <li>
                <strong className={styles.teamName}>Marcel Barbulescu</strong>
                <span className={styles.teamRole}>
                  President and Chief Financial Officer
                </span>
              </li>
              <li>
                <strong className={styles.teamName}>Cristian Bursasiu</strong>
                <span className={styles.teamRole}>Chief Product Officer</span>
              </li>
              <li>
                <strong className={styles.teamName}>Daniel Markovits</strong>
                <span className={styles.teamRole}>
                  Chief Technology Officer
                </span>
              </li>
              <li>
                <strong className={styles.teamName}>Raluca Popa</strong>
                <span className={styles.teamRole}>Chief Marketing Officer</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="h2">Advisors</h3>
            <ul className={styles.team}>
              <li>
                <strong className={styles.teamName}>Erik J Blutinger</strong>
                <span className={styles.teamRole}>MD</span>
              </li>
              <li>
                <strong className={styles.teamName}>Omar Maniya</strong>
                <span className={styles.teamRole}>MD</span>
              </li>
              <li>
                <strong className={styles.teamName}>Jonathan Moreno</strong>
                <span className={styles.teamRole}>Pd. H</span>
              </li>
              <li>
                <strong className={styles.teamName}>Alexander Sackheim</strong>
                <span className={styles.teamRole}>MD</span>
              </li>
              <li>
                <strong className={styles.teamName}>TBD</strong>
                <span className={styles.teamRole}>
                  Ph.D. Acoustical Engineer
                </span>
              </li>
            </ul>
          </section>

          <div className={styles.arrowLink}>
            <a href="./">
              <strong>See our Full Board of Advisors</strong>
            </a>
          </div>
        </section>

        {/**
         * Contact us section
         */}
        <section
          id="contact-us"
          className={`${styles.section} ${styles.columns}`}
        >
          <div>
            <header>
              <h2 className="subheading">SafeSphere your business</h2>
            </header>
            <br />
            <p>
              <strong>
                It’s time to rethink how the world works and get back to
                business.
              </strong>
            </p>
            <p>
              SafeSphere will shortly be available to businesses and
              institutions – sign up now for important updates.
            </p>
            <form action="/">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="button">
                Subscribe
              </button>
            </form>
          </div>

          <form action="/">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <input type="tel" placeholder="phone" />
            <input type="text" placeholder="How can we help?" />
            <button type="submit" className="button">
              Contact Us
            </button>
          </form>
        </section>
      </main>

      <footer className={styles.pageFooter}>
        <span>
          Designed and developed by <strong>[e-spres-oh]</strong>
        </span>
        <span>&copy;Safe Sphere, 2020</span>
      </footer>
    </div>
  );
}
