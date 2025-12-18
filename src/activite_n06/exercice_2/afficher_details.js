function Afficher({ blogs, supprimmer, filterblog }) {
    return (
        <div>
            {filterblog.map((post) => (



                <div className="bx">
                    <h1>{post.title}</h1>
                    <p>
                        {post.body}

                    </p>
                    <p>Athur : {post.author}</p>
                    <button onClick={() => supprimmer(post.id,post.author)}>Delete</button>


                </div>

            ))}

        </div>



    )

}
export default Afficher
