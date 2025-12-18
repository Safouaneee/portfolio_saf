import { useState } from "react"

function Form({ blogs, setBlogs, filterblog, setfilterblog ,listoption,setoption}) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")


    function handleSubmit(e) {
        e.preventDefault()

        if (title == "" || body == "" || author == "") {
            alert("verifier les champ !!!!!")
            return
        }
        const newpost = {
            id: blogs.length + 1,
            title: title,
            body: body,
            author: author

        }
        setBlogs([newpost, ...blogs])
        setfilterblog([newpost, ...blogs])
        setoption([...listoption,newpost.author])
        setTitle("")
        setBody("")
        setAuthor("")
        
    }
    function filter_inp(e) {
        const value = e.target.value
        if (value == "tous") {
            setfilterblog(blogs)
        }
        else {

            const blogs_filter = blogs.filter((post) => post.author.includes(value))
            setfilterblog(blogs_filter)
        }
        


    }



    return (
        <form onSubmit={(e) => handleSubmit(e)}>

            <h1 className="my-3 text-center">Add Post</h1>
            <select onChange={(e) => filter_inp(e)} type="text" className="form-select mb-3" >
                <option >select par authur</option>
                <option value={"tous"}>tous</option>
                <option value={"safouane"}>safouane</option>
                <option value={"sfriwi"}>safriwi</option>
                <option value={"ahmed"}>ahmed</option>
                <option value={"robert"}>robert</option>

                {listoption.map((elm)=>{
                    return <option value={elm}>{elm}</option>
                    
                })}

            </select>

            <label className="form-label ">Title</label>
            <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control mb-3" />

            <label className="form-label ">Body</label>
            <input value={body} onChange={(e) => { setBody(e.target.value) }} type="text" className="form-control mb-3" />

            <label className="form-label ">Author</label>
            <input value={author} onChange={(e) => { setAuthor(e.target.value) }} type="text" className="form-control mb-3" />




            <input type="submit" value={"Add"} className="btn btn-primary w-100 mb-4" />
        </form>
    )
}
export default Form 