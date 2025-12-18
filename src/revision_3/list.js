function List({table}){
    return(
         <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>nom</th>
                        <th>email</th>
                        <th>university</th>
                        <th>loisirs</th>
                         
                    </tr>

                </thead>
                <tbody>
                   {table.map(elm=>{

                  return  <tr>
                        <td>{elm.nom}</td>
                        <td>{elm.email}</td>
                        <td>{elm.university}</td>
                        <td>{elm.loisirs.join(", ")}</td>

                    </tr>
                   })}
                </tbody>

            </table>
         </div>
    )


}
export default List