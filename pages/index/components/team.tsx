import React, { useEffect, useCallback, useState } from "react";
import { throttle } from "../../../utils";
import { management, advisors } from "../../../data/team";
import styles from "./team.module.scss";

type Member = {
  name: string;
  image: string;
  role: string;
  description: string;
};

function Team() {
  const [active, setActive] = useState("");

  const refs = management
    .concat(advisors)
    .reduce((acc: any, member: Member) => {
      acc[
        member.name
      ] = React.createRef() as React.MutableRefObject<HTMLElement | null>;
      return acc;
    }, {});

  const toggleScrolledAttribute = useCallback(
    throttle(() => active && updateActivePopup(refs[active].current!), 300),
    [active]
  );

  useEffect(() => {
    window.addEventListener("scroll", toggleScrolledAttribute);
    window.addEventListener("click", hidePopup);

    return () => {
      window.removeEventListener("scroll", toggleScrolledAttribute);
      window.removeEventListener("click", hidePopup);
    };
  });

  return (
    <>
      <section>
        <h3 className={`h2 ${styles.teamTitle}`}>Management</h3>
        <ul className={`${styles.team} ${styles.teamIncomplete}`}>
          {management.map((member) => (
            <Member
              ref={refs[member.name]}
              key={member.name}
              member={member}
              active={active}
              setActive={() => toggleActive(member.name)}
            />
          ))}
        </ul>
      </section>

      <div className={styles.divider}></div>

      <section>
        <h3 className={`h2 ${styles.teamTitle}`}>Advisors</h3>
        <ul className={`${styles.team} ${styles.teamIncomplete}`}>
          {advisors.map((member) => (
            <Member
              ref={refs[member.name]}
              key={member.name}
              member={member}
              active={active}
              setActive={() => toggleActive(member.name)}
            />
          ))}
        </ul>
      </section>
    </>
  );

  function toggleActive(name: string) {
    setActive(name === active ? "" : name);
    const ref = refs[name].current;
    setTimeout(() => updateActivePopup(ref), 0);
  }

  function hidePopup() {
    if (!active) {
      return;
    }

    const ref: HTMLElement = refs[active].current;
    const popup = getPopup(ref);
    popup.setAttribute("data-show", "false");
    setActive("");
  }
}

type MemberProps = {
  member: Member;
  active: string;
  setActive(): void;
};

const Member = React.forwardRef((props: MemberProps, ref: any) => {
  const { member, active, setActive } = props;
  const { name, image, role, description } = member;

  const show = name === active;

  let _role = role.split("\n").join("</span><span>");
  _role = `<span>${_role}</span>`;

  return (
    <li data-active={show} ref={ref}>
      <div
        className={styles.teamMain}
        onClick={(e) => {
          e.stopPropagation();
          setActive();
        }}
      >
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
          <span
            className={styles.teamRole}
            dangerouslySetInnerHTML={{ __html: _role }}
          ></span>
        </div>

        <span className={styles.teamArrow}>Toggle</span>
      </div>

      <section
        className={styles.teamDescription}
        data-show="false"
        onClick={(e) => e.stopPropagation()}
      >
        <header>
          <h4>{name}</h4>
          <em>{role}</em>
        </header>
        <p>{description}</p>
      </section>
    </li>
  );
});

function updateActivePopup(elem: HTMLElement) {
  if (!elem) {
    return false;
  }

  const screenH = window.innerHeight || document.documentElement.clientHeight;
  const rectImage = elem.querySelector("img")!.getBoundingClientRect();

  const elemH = rectImage.height;
  const elemY = rectImage.top;

  const isElementPassedScreenCenter = elemY + elemH / 2 < screenH / 2;

  const popup = getPopup(elem);
  const ul = elem.closest("ul") as HTMLElement;
  const rectPopup = popup.getBoundingClientRect();
  const rectUl = ul.getBoundingClientRect();
  const elementOffsetToUl = elemY - rectUl.top;

  popup.setAttribute("data-show", "true");

  if (isElementPassedScreenCenter) {
    elem.setAttribute("data-scrolled", "true");
    popup.style.top = `${elementOffsetToUl + elemH + 15}px`;
  } else {
    elem.setAttribute("data-scrolled", "false");
    popup.style.top = `${elementOffsetToUl - rectPopup.height - 15}px`;
  }
}

function getPopup(elem: HTMLElement) {
  return elem.querySelector("[data-show]") as HTMLElement;
}

export default Team;
