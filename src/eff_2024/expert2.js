import React, { useState, useEffect } from 'react';
import expertsData from './expert_data';
import Expert from './expert';
function Experts2({ expert }) {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/expert2')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de réseau');
        }
        return response.json();
      })
      .then(data => {
        const expertsArray = Array.isArray(data) ? data : [data];
        setExperts(expertsArray);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div>
      <h2>Liste des Experts (API)</h2>
       
       <ul >
        {expertsData.map((expert) => (
          <Expert key={expert.id} expert={expert} />
        ))}
      </ul>
    </div>
  );
}

export default Experts2;