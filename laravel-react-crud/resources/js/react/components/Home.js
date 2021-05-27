import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import AppContainer from './AppContainer'
import api from './../api' 
import Table from './table' 
  
const Home = () => {   
    const [posts,setPosts] = useState(null) 

    const fetchPosts = () => {
        api.getAllPosts().then(res=>{ 
            const result = res.data;
            setPosts(result.data)
        }) 
    }

    useEffect(()=>{
        fetchPosts();
    },[])
 
    return (
        <AppContainer title="Laravel ReactJs - Crud">
            <Link to="/add" className="btn btn-primary">Add post</Link>
            <div className="table-responsive"> 
                <Table posts={posts} fetchPosts={fetchPosts} />
            </div>
        </AppContainer>
    );
}

export default Home