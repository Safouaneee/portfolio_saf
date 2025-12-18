import { useEffect, useState } from "react";
import axios from "axios";

function Home_appi_2() {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]); 

  useEffect(() => {
    axios.get("https://students203204.vercel.app/api/students")
      .then((res) => {
        setData(res.data);
        setAllData(res.data);
      });
  }, []);

  
  const filterGroup = (groupName) => {
    const filtered = allData.filter(student => student.Group === groupName);
    setData(filtered);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Liste des étudiants</h2>

      <button onClick={() => setData(allData)}>Tous</button>
      <button onClick={() => filterGroup("group203")}>Group203</button>
      <button onClick={() => filterGroup("group204")}>Group204</button>

      <br /><br />

      <table border="1" width="100%" >
        <thead>
          <tr>
            <th>CEF</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {data.map((s) => (
            <tr key={s.CEF}>
              <td>{s.CEF}</td>
              <td>{s.Nom}</td>
              <td>{s.Prénom}</td>
              <td>{s.Group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home_appi_2;
