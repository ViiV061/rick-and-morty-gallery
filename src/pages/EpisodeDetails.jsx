// EpisodeDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EpisodeDetails() {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchEpisode = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode/${id}`
      );
      const data = await response.json();
      setEpisode(data);

      const characterPromises = data.characters.map((url) =>
        fetch(url).then((res) => res.json())
      );
      const characterData = await Promise.all(characterPromises);
      setCharacters(characterData);
    };
    fetchEpisode();
  }, [id]);

  if (!episode) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{episode.name}</h2>
      <p>Episode: {episode.episode}</p>
      <p>Air Date: {episode.air_date}</p>
      <h3>Characters:</h3>
      <div>
        {characters.map((character) => (
          <>
            <img
              key={character.id}
              src={character.image}
              alt={character.name}
            />
            <h4>{character.name}</h4>
          </>
        ))}
      </div>
    </div>
  );
}

export default EpisodeDetails;
