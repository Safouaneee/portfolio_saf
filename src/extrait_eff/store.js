import { configureStore } from "@reduxjs/toolkit";


const initialState = {
  velo: {
    id: 14,
    matricule: "1 A 4321",
    date_derniere_maintenance: "01/06/2025",
    date_prochaine_maintenance: "01/08/2025",
    batterieUtilisee: {
      id: 135,
      capacite: 73,
      numero_serie: "BAT-202",
      sante_batterie: 95,
      nombre_cycles: 2127,
      statut: "En Utilisation"
    }
  },

  technicians: [
    { id: 1, nom: "Ali" },
    { id: 2, nom: "Sara" }
  ],

  batteries: [
    { id: 1, numero_serie: "BAT-202" },
    { id: 2, numero_serie: "BAT-303" }
  ],

  statutBatterie: ["En Stock", "En Utilisation", "Retiré"]
};


function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}


const store = configureStore(reducer);

export default store;
