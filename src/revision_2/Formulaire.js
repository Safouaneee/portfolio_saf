
export default function Formulaire() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Formulaire d'inscription</h2>
      <form>
        <input type="text" placeholder="Nom" /><br /><br />
        <input type="text" placeholder="Email" /><br /><br />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
