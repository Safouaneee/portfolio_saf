function Result({filterlist}){

        return(
            <div style={{ margin: 'auto', padding: '10px', width: '300px', border: '1px solid  rgba(0,0,0,0.3) ', backgroundColor: ' rgba(0,0,0,0.3)', backdropFilter: 'blur(20px)', borderRadius: '5px' }}>
                <h1 style={{ fontSize: '25px', margin: '25px 0', fontWeight: "bold" }}>Composant ResultatList</h1>
                <div style={{ margin: 'auto', padding: '10px', width: '200px', border: '1px solid white', color: 'white', backgroundColor: 'rgba(0,0,0,0.9)' }}>


                    <ul>
                        {filterlist.map(elm =>
                            <li>{elm.nom}</li>
                        )}

                    </ul>


                </div>
            </div>
        )



}
export default Result