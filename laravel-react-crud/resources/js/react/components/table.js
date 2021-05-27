import { Link } from 'react-router-dom'
import api from '../api' 

const fetchPosts = (props) => {
    props.fetchPosts()
}

const renderPosts = (posts,props) => {
    if(!posts){
        return (
            <tr>
                <td colSpan="4">Loading posts...</td> 
            </tr>
        )
    }
    if(posts.length===0){
        return (
            <tr>
                <td colSpan="4">There is no posts...</td> 
            </tr>
        )
    }
    return posts.map((post)=>( 
        <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.description}</td>
            <td>
                <Link to={`/edit/${post.id}`} className="btn btn-warning">Edit</Link> 
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={ ( )=> { 
                        api.deletePost(post.id)
                            .then(fetchPosts(props))
                            .catch(err=>{
                                alert('err')
                            });
                    }}    
                >
                    Delete
                </button> 
            </td>
        </tr>  
    ))
}

export default (props)=>{
    return (
        <table className="table table-striped mt-1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderPosts(props.posts,props)}
            </tbody>
        </table>
    )
}

