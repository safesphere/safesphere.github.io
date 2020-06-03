import React from "react";
import styles from "./hamburger.module.scss";

type Props = {
  label: string;
  active: boolean;
  onClick(): void;
  color?: string;
};

function Hamburger(props: Props) {
  const { active, label, onClick, color } = props;
  var style = { "--color": color } as React.CSSProperties;

  return (
    <div
      aria-label={label}
      className={styles.hamburger}
      onClick={() => onClick()}
      data-active={active}
    >
      <span className={styles.hamburgerBox} style={style}>
        <span className={styles.hamburgerInner} />
      </span>
    </div>
  );
}

export default Hamburger;
