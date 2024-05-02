import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome to the Rick and Morty App</h1>
      <p>
        Explore characters, locations, and episodes from the Rick and Morty
        universe!
      </p>
    </div>
  );
}
export default Home;
