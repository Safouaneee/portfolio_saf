import { useState } from "react"
import Afficher from "./afficher_details"
import Form from "./form"
import Password from "./password"


function Home() {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "title1", body: "....", author: "safouane" },
        { id: 2, title: "title2", body: "....", author: "ahmed" },
        { id: 3, title: "title3", body: "....", author: "sfriwi" },
        { id: 4, title: "title4", body: "....", author: "robert" }

    ])
    const [filterblog, setfilterblog] = useState(blogs)
    const [listoption,setoption]=useState([])



    function supprimmer(id,authur) {
        const tab_filter = blogs.filter(elm => elm.id !== id)
        const filter_option=listoption.filter(elm=>elm!==authur)
        setBlogs(tab_filter)
        setoption(filter_option)
        setfilterblog(tab_filter)

    }




    return (
        <>
            <Form blogs={blogs} setBlogs={setBlogs} filterblog={filterblog} setfilterblog={setfilterblog} listoption={listoption} setoption={setoption} />


            <Afficher blogs={blogs} supprimmer={supprimmer} filterblog={filterblog} />

            <Password />
        </>
    )

    /*
                <div className="bx">
                    <h1>{post.title}</h1>
                    <p>
                        {post.body}
    
                    </p>
                    <p>Athur : {post.authur}</p>
                    <button onClick={() => supprimmer(post.id)}>Delete</button>
    
                </div>
            )
                */


}
export default Home