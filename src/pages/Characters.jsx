import { useEffect, useState } from "react";
import styles from "./Characters.module.css";
import CharacterCard from "./CharacterCard";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
      const response = await fetch(url);
      const data = await response.json();

      setCharacters(data.results);
      setTotalPages(data.info.pages);
      setPrevPage(data.info.prev);
      setNextPage(data.info.next);
      setIsLoading(false);
    };
    fetchData();
  }, [currentPage]);

  const Pagination = ({
    currentPage,
    totalPages,
    prevPage,
    nextPage,
    onPageChange,
  }) => {
    return (
      <div>
        <button onClick={() => onPageChange(prevPage)}>Previous</button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => onPageChange(nextPage)}>Next</button>
      </div>
    );
  };
  const handlePageChange = (url) => {
    if (url !== null) {
      const pageNumber = url.split("=")[1];
      setCurrentPage(pageNumber);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Characters {characters.length}</h1>
      <div className={styles.card}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        prevPage={prevPage}
        nextPage={nextPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Characters;
