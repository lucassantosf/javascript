import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppContainer from './AppContainer' 
import Table from './table' 
import { connect } from 'react-redux'
import { getPosts } from '../actions'

const Home = (props) => {   
    
    useEffect(()=>{
        props.getPosts()
    },[])
 
    return (
        <AppContainer title="Laravel ReactJs - Crud">
            <Link to="/add" className="btn btn-primary">Add post</Link>
            <div className="table-responsive"> 
                <Table />
            </div>
        </AppContainer>
    );
}

const mapStateToProps = (state)=>{
    return {
        posts : state.posts
    }
}

const mapActionToProps = {
    getPosts
}

export default connect(mapStateToProps,mapActionToProps)(Home)

