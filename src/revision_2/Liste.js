
export default function Liste() {
  const candidats = ['Ali', 'Sara', 'Omar'];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Liste des candidats</h2>
      <ul>
        {candidats.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
