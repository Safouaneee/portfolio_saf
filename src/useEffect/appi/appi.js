import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

function ExempleGet() { 


  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(true); 
 
  useEffect(() => { 
    // 1. Définir l'URL 
    const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5';  
 
    setLoading(true); 
 
    // 2. Requête GET et gestion de la promesse 
    axios.get(API_URL) 
      .then(response => { 
        // Succès : stocker les données (response.data) 
        setPosts(response.data); 
        
      }) 
      .catch(error => { 
        // Échec : afficher l'erreur dans la console 
        console.error("Erreur GET:", error); 
      }) 
      .finally(() => { 
        // Terminé : cacher l'indicateur de chargement 
        setLoading(false); 
      });

  })


  return(
    <div>
      {posts.map((elm=>(
        <div>
                <p>{elm.id}</p>
                <h3>{elm.title}</h3>
                <p>{elm.body}</p>
        </div>
      )))}
    </div>
  )
  /*
  أول مرة كيدخل useEffect → كيدير axios.get → منين توصل البيانات → كيتبدل posts بـ setPosts(response.data)

    تبدل posts ⇒ كيدير rerender واحد فقط باش React تعاود تعرض البيانات الجديدة

    ولكن منين كيتعاود داك rerender، useEffect كيتنفذ ثاني مرة ⚠️

    هاديك المرة الثانية كترجع نفس البيانات → setPosts كيحط نفس القيم القديمة → React كيشوف ما تبدل والو ⇒ ما كيديرش rerender ثالث ✅

  */



}

export default ExempleGet