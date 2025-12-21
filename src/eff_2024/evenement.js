function Evenements({ evenements }) {
  const totalCout = evenements.reduce((sum, event) => {
    return sum + (Number(event.cout_journalier * event.duree));
  }, 0);

  return (
    <div>
      <table border="1" >
        <thead>
          <tr>
            <th>Thème</th>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Description</th>
            <th>Coût journalier</th>
            <th>Durée (jours)</th>
            <th>Coût Total Événement</th>
          </tr>
        </thead>
        <tbody>
          {evenements.map((event, index) => (
            <tr key={index}>
              <td>{event.theme}</td>
              <td>{event.date_debut}</td>
              <td>{event.date_fin}</td>
              <td>{event.description}</td>
              <td>{event.cout_journalier} DH</td>
              <td>{event.durée}</td>
              <td>{Number(event.cout_journalier * event.duree)} DH</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p >
        Total des coûts des événements assurés est : {Number(totalCout)} DH
      </p>
    </div>
  );
}

export default Evenements;