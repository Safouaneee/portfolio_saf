import { useState } from "react";
function Formulaire() {
  const [formData, setFormData] = useState({
    theme: '',
    date_debut: '',
    date_fin: '',
    cout: '',
    expert: ''
  });
  
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const startDate = new Date(formData.date_debut);
    const endDate = new Date(formData.date_fin);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    const coutTotal = diffDays * parseInt(formData.cout || 0);
    
    setResult({
      ...formData,
      duree: diffDays,
      coutTotal: coutTotal
    });
  };

  return (
    <div>
      <h2>Formulaire de l'événement</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Thème : </label>
          <input 
            type="text" 
            name="theme" 
            value={formData.theme} 
            onChange={handleChange}
            placeholder="Développement web"
            style={{ marginLeft: '10px' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Date de début : </label>
          <input 
            type="date" 
            name="date_debut" 
            value={formData.date_debut} 
            onChange={handleChange}
            style={{ marginLeft: '10px' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Date de fin : </label>
          <input 
            type="date" 
            name="date_fin" 
            value={formData.date_fin} 
            onChange={handleChange}
            style={{ marginLeft: '10px' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Coût journalier : </label>
          <input 
            type="number" 
            name="cout" 
            value={formData.cout} 
            onChange={handleChange}
            style={{ marginLeft: '10px' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Expert : </label>
          <input 
            type="text" 
            name="expert" 
            value={formData.expert} 
            onChange={handleChange}
            placeholder="DUPONT JEAN"
            style={{ marginLeft: '10px' }}
          />
        </div>
        
        <button type="submit">Confirmer</button>
      </form>

      {result && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <p><strong>Thème :</strong> {result.theme}</p>
          <p><strong>Date de début :</strong> {result.date_debut}</p>
          <p><strong>Date de fin :</strong> {result.date_fin}</p>
          <p><strong>Coût journalier :</strong> {result.cout} DH</p>
          <p><strong>Expert :</strong> {result.expert}</p>
          <hr />
          <p>
            L'expert {result.expert} assurera le thème: {result.theme} avec un coût journalier 
            de {result.cout} DH pour une durée de : {result.duree} jours, soit un coût total de : 
            {result.coutTotal} DH
          </p>
        </div>
      )}
    </div>
  );
}

export default Formulaire;