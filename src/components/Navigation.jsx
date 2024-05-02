import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/characters" className={styles.link}>
            Characters
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/locations" className={styles.link}>
            Locations
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/episodes" className={styles.link}>
            Episodes
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
