import React, { useState } from "react";
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

  function toggleActive(name: string) {
    setActive(name === active ? "" : name);
  }

  if (!members) {
    return null;
  }

  return (
    <ul className={styles.team}>
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

export default Team;
