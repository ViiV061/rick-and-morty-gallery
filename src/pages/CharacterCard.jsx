import { Link } from "react-router-dom";
import styles from "./CharacterCard.module.css";

function CharacterCard({ character }) {
  let statusColor;
  if (character.status === "Alive") {
    statusColor = <span>🟢</span>;
  } else if (character.status === "Dead") {
    statusColor = <span>🔴</span>;
  } else {
    statusColor = <span>⚪</span>;
  }
  return (
    <div className={styles.card}>
      <Link to={`/characters/${character.id}`}>
        <img
          className={styles.image}
          src={character.image}
          alt={character.name}
        />
      </Link>
      <Link to={`/characters/${character.id}`}>
        <h2 className={styles.name}>{character.name}</h2>
      </Link>
      <p className={styles.status}>
        {statusColor}
        {character.status} - {character.species}
      </p>
    </div>
  );
}

export default CharacterCard;
