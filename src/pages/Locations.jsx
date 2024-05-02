import { useEffect, useState } from "react";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://rickandmortyapi.com/api/location";
      const response = await fetch(url);
      const data = await response.json();

      setLocations(data.results);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const locationList = locations.map((location) => {
    const residents = location.residents.length;
    return (
      <li key={location.id}>
        <h2>{location.name}</h2>
        <p>Type: {location.type}</p>
        <p>Dimension: {location.dimension}</p>
        <p>Residents: {residents}</p>
      </li>
    );
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Locations</h1>
      <ul>{locationList}</ul>
    </div>
  );
}

export default Locations;
