
export default function Navbarr({ setPage }) {
  return (
    <nav style={{ background: '#3b5d50', padding: '10px', color: 'white' }}>
      <button onClick={() => setPage('form')} style={{ marginRight: '10px' }}>
        Formulaire
      </button>
      <button onClick={() => setPage('liste')}>
        Liste des candidats
      </button>
    </nav>
  );
}
