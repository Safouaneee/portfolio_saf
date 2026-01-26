import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import App_devoir_2 from './devoir_2/app_devoir_2';
//import App_livres from './exercice_2/app_livres';
//import App_use from './useEffect/app_use';
//import ExempleGet from './useEffect/appi/appi';
//import App_todolist from './activite_nm_11/app_todolist';
//import App_revision from './revision_controle/app_revision';
//import App_v2 from './revision_controle_2/app_v2';
//import App_students from './devoir_3/app_students';
//import App_dev_3 from './devoir_3_v2/app_devoir_3';
//import App_todolist from './todolist/app_todo';
//import App_axios from './revision_axios/app_axios';
/*
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import Reducer from './todolist/calulatrice_redux/store';
import App_redux from './todolist/calulatrice_redux/app';
*/
//const store =legacy_createStore(Reducer)
//import App_dev_2 from './todolist/devoir_appi_2/app_appi_2';

import { Provider } from 'react-redux';
//import store from './Redux_Classique/store';
//import App_red_classique from './Redux_Classique/app_redux_classique';

//import Store from './Redux_Toolkit/store';
//import App_redux_tolkiit from './Redux_Toolkit/app_redux_tolkit';
//import { store_ac_12 } from './actvite_12_ex_1_2/store_activite_12_ex_1';
//import App_ac_12_ex1 from './actvite_12_ex_1_2/App_activite_12_ex_1_2';
//import Home_red from './learn_redux/home';
//import store from './learn_redux/store';

//import store_fr from './gerer_les_projets_freelance/store_fr';
//import App_fr from './gerer_les_projets_freelance/app_freelance';
//import store from './redux_tolkit_understanding/store';
//import App from './redux_tolkit_understanding/app';

//import store_pr from './gestionaire_produits/store';
//import Home from './gestionaire_produits/home';
import App_portfolio from './portfolio/app_portfolio';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <App_portfolio/>
            
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//<Provider store={store_pr<Home /> </Provider> 