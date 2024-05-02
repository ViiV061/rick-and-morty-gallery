import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            exact
            className={styles.link}
            activeClassName={styles.active}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/characters"
            className={styles.link}
            activeClassName={styles.active}
          >
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/locations"
            className={styles.link}
            activeClassName={styles.active}
          >
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/episodes"
            className={styles.link}
            activeClassName={styles.active}
          >
            Episodes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
