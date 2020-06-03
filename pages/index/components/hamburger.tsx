import React from "react";
import styles from "./hamburger.module.scss";

type Props = {
  label: string;
  active: boolean;
  onClick(): void;
};

function Hamburger(props: Props) {
  const { active, label, onClick } = props;

  return (
    <div
      aria-label={label}
      className={styles.hamburger}
      onClick={() => onClick()}
      data-active={active}
    >
      <span className={styles.hamburgerBox}>
        <span className={styles.hamburgerInner} />
      </span>
    </div>
  );
}

export default Hamburger;
