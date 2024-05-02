import { useEffect, useState } from "react";
import "./Episodes.css";
import { Link } from "react-router-dom";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let allEpisodes = [];
      let url = "https://rickandmortyapi.com/api/episode";

      while (url) {
        const response = await fetch(url);
        const data = await response.json();

        allEpisodes = [...allEpisodes, ...data.results];
        url = data.info.next;
      }

      setEpisodes(allEpisodes);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Episodes</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Episode</th>
            <th>Air Date</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode) => (
            <tr key={episode.id}>
              <td>
                <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
              </td>
              <td>{episode.episode}</td>
              <td>{episode.air_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Episodes;
