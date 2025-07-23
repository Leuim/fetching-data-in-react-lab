import StarshipCard from '../StarshipCard/StarshipCard';

export default function StarshipList({ starshipsData }) {
  if (!starshipsData.length) {
    return <p>Loading starships...</p>;
  }

  return (
    <section>
      <h2>Starships</h2>
      <p>Number of result: {starshipsData.length}</p>
      <ul>
        {starshipsData.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </ul>
    </section>
  );
}
