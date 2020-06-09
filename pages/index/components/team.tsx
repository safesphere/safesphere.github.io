import React, { useState, useEffect, useRef, useCallback } from "react";
import { throttle } from "../../../utils";
import styles from "./team.module.scss";

type Member = {
  name: string;
  image: string;
  role: string;
  description: string;
};

type Props = {
  members: Member[];
};

function Team(props: Props) {
  const { members } = props;
  const [active, setActive] = useState("");
  const listRef = useRef() as React.MutableRefObject<HTMLUListElement | null>;

  const toggleScrolledAttibute = useCallback(
    throttle(
      () =>
        listRef.current?.setAttribute(
          "data-scrolled",
          String(isElementPassedScreenCenter(listRef.current!))
        ),
      500
    ),
    [listRef.current]
  );

  useEffect(() => {
    window.addEventListener("scroll", toggleScrolledAttibute);
    return () => window.removeEventListener("scroll", toggleScrolledAttibute);
  });

  if (!members) {
    return null;
  }

  return (
    <ul className={styles.team} ref={(e) => (listRef.current = e)}>
      {members.map((member) => (
        <Member
          key={member.name}
          member={member}
          active={active}
          setActive={() => toggleActive(member.name)}
        />
      ))}
    </ul>
  );

  function toggleActive(name: string) {
    setActive(name === active ? "" : name);
  }
}

type MemberProps = {
  member: Member;
  active: string;
  setActive(): void;
};

function Member(props: MemberProps) {
  const { member, active, setActive } = props;
  const { name, image, role, description } = member;

  const show = name === active;

  return (
    <li data-active={show}>
      <div className={styles.teamMain} onClick={setActive}>
        {image ? (
          <img
            src={`/assets/team/${image}`}
            alt={`${name} photo`}
            className={styles.teamPhoto}
          />
        ) : (
          <div
            style={{ backgroundColor: "white" }}
            className={styles.teamPhoto}
          ></div>
        )}

        <div className={styles.teamContent}>
          <strong className={styles.teamName}>{name}</strong>
          <span className={styles.teamRole}>{role}</span>
        </div>

        <span className={styles.teamArrow}>Toggle</span>
      </div>

      <section className={styles.teamDescription} data-show={show}>
        <header>
          <h4>{name}</h4>
          <em>{role}</em>
        </header>
        <p>{description}</p>
      </section>
    </li>
  );
}

function isElementPassedScreenCenter(elem: HTMLElement) {
  if (!elem) {
    return false;
  }

  const screenH = window.innerHeight || document.documentElement.clientHeight;
  const rect = elem.getBoundingClientRect();
  const elemH = rect.height;
  const elemY = rect.top;

  return elemY + elemH / 2 < screenH / 2;
}

export default Team;
