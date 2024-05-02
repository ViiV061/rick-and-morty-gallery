import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [origin, setOrigin] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const url = `https://rickandmortyapi.com/api/character/${id}`;
      const response = await fetch(url);

      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }

      const data = await response.json();
      setCharacter(data);

      // get character's origin for origin URL
      if (data.origin.url) {
        // check if origin URL is available
        const originResponse = await fetch(data.origin.url);
        const originData = await originResponse.json();
        setOrigin(originData);
      }
      // get character's location for location URL
      if (data.location.url) {
        // check if location URL is available
        const locationResponse = await fetch(data.location.url);
        const locationData = await locationResponse.json();
        setLocation(locationData);
      }

      setIsLoading(false);
    };
    fetchCharacter();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="character-card">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
      <h3>Origin:</h3>

      <div>
        <p>Name: {origin ? origin.name : "Unknown"}</p>
        <p>Type: {origin ? origin.type : "Unknown"}</p>
        <p>Dimension: {origin ? origin.dimension : "Unknown"}</p>
      </div>

      <h3>Location:</h3>

      <div>
        <p>Name: {location ? location.name : "Unknow"}</p>
        <p>Type: {location ? location.type : "Unknow"}</p>
        <p>Dimension: {location ? location.dimension : "Unkow"}</p>
      </div>
      <h3>Appeared in Episodes:</h3>
    </div>
  );
}

export default CharacterDetails;
