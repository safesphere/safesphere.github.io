import React from "react";
import { AppProps } from "next/app";

import Header from "./components/header";
import Team from "./components/team";
import Contact from "./components/contact";
import Newsletter from "./components/newsletter";
import Video from "./components/video";

import { management, advisors } from "../../data/team";

import styles from "./index.module.scss";

export default function Home(props: AppProps) {
  const {} = props;

  return (
    <div className="container">
      <Header />

      <main>
        {/**
         * Intro + video section
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
              a safe environment for employees and guests. Our proprietary
              technology helps companies protect and empower people in their
              workplace, by identifying proximity risks with zero data stored.
            </p>

            <p>
              <strong>
                Maintaining social distancing has never been easier than with
                SafeSphere.
              </strong>
            </p>
            <br />
            <a href="#about" className="button">
              Learn more
            </a>
          </div>

          <div className={`${styles.firstColumn}`}>
            <Video youtubeId="ZnlSzlIW-X0" />
          </div>
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
                SafeSphere's proprietary technology constantly analyzes
                proximity data between smartphones.
              </strong>
            </p>
          </div>
          <img
            src="/assets/illustration-about.svg"
            alt=""
            style={{ width: "100%", alignSelf: "center" }}
            className={`${styles.firstColumn}`}
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
            loading="lazy"
          />
          <div>
            <header>
              <h2 className="h2">How it works</h2>
              <p className="subheading">A Sound Solution</p>
            </header>
            <br />
            <ul className="bullet">
              <li>
                Using precise acoustic signals, SafeSphere’s patent-pending
                algorithms determine how close users are to each other, alerting
                them to keep a safe distance.
              </li>
              <li>
                The indicator is highly-customizable and works with any mobile
                app technology to help provide a safe environment.
              </li>
              <li>
                Thanks to its unique algorithm, SafeSphere minimizes exposure in
                unsafe environments by monitoring short distances between people
                over time.
              </li>
              <li>
                No other technology can accurately measure proximity for short
                distances like SafeSphere on mobile devices.
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
              <h2 className="h2">Use Cases</h2>
              <p className="subheading">Who Benefits?</p>
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
              <img src="/assets/icon-supermarkets.svg" alt="" loading="lazy" />
              Supermarkets and retail spaces
            </li>
            <li>
              <img src="/assets/icon-sports.svg" alt="" loading="lazy" />
              Sports arenas and gyms
            </li>
            <li>
              <img src="/assets/icon-universities.svg" alt="" loading="lazy" />
              Universities
            </li>
            <li>
              <img src="/assets/icon-restaurants.svg" alt="" loading="lazy" />
              Restaurants
            </li>
            <li>
              <img src="/assets/icon-office.svg" alt="" loading="lazy" />
              Office buildings and factories
            </li>
            <li>
              <img src="/assets/icon-hospitals.svg" alt="" loading="lazy" />
              Healthcare institutions
            </li>
            <li>
              <img src="/assets/icon-airports.svg" alt="" loading="lazy" />
              Airports and train stations
            </li>
            <li>
              <img src="/assets/icon-parks.svg" alt="" loading="lazy" />
              Recreational facilities
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
            style={{ width: "100%", maxWidth: "400px", alignSelf: "center" }}
            loading="lazy"
          />
          <div
            style={{ alignSelf: "center" }}
            className={`${styles.firstColumn}`}
          >
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
                We tackle safety with a 360&deg; approach: No data stored and
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
                <h2 className="h2">SafeSphere’s Founding team</h2>
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
                inexpensive way to create a safe space between mobile users. We
                are a joint venture between Espresoh Tech, a US-based product
                engineering company, and Alpine Consolidated, investing in
                first-to-market businesses for more than 25 years.
              </p>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />

          <section className={styles.teamSection}>
            <h3 className={`h2 ${styles.teamTitle}`}>Management</h3>
            <Team members={management} />
          </section>

          <div className={styles.divider}></div>

          <section className={styles.teamSection}>
            <h3 className={`h2 ${styles.teamTitle}`}>Advisors</h3>
            <Team members={advisors} />
          </section>

          <br />

          <div className={styles.fullBoard}>
            See our full Board of Advisors at{" "}
            <a
              href="https://www.alpineconsolidated.com/#advisors"
              target="_blank"
            >
              <strong>Alpine</strong>
            </a>{" "}
            and{" "}
            <a
              href="https://www.e-spres-oh.com/people#advisors"
              target="_blank"
            >
              <strong>[e-spres-oh]</strong>
            </a>
          </div>
        </section>

        {/**
         * Contact us section
         */}
        <div className={styles.contact}>
          <section
            id="contact-us"
            className={`${styles.section} ${styles.columns}`}
          >
            <div>
              <header>
                <h2 className="subheading">SafeSphere Your Business Now</h2>
              </header>
              <br />
              <p>
                <strong>
                  It’s time to rethink how the world works and get back to
                  business.
                </strong>
              </p>
              <p>
                Using SafeSphere, organizations will soon be able to identify
                social clusters to better manage social distancing in their
                organizations.
              </p>
              <p>Sign up now for important updates.</p>

              <Newsletter />
            </div>

            <Contact />
          </section>

          <footer className={styles.pageFooter}>
            <div>
              Designed and developed by{" "}
              <strong>
                <a href="https://e-spres-oh.com/" target="_blank">
                  [e-spres-oh]
                </a>
              </strong>
            </div>
            <div>&copy;SafeSphere, 2020</div>
          </footer>
        </div>
      </main>
    </div>
  );
}
